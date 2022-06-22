import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import axios from "../../api/axios";
import CustomSpinner from "../../helpers/CustomSpinner";
import currencyConverter from "../../utils/currencyConverter";

const url = "/users-resume";

function ChartTransactions() {
  const [data, setData] = useState<any>();
  const [age, setAge] = useState<any>();
  const [loading, setLoading] = useState(false);

  async function getItems() {
    const category: number[] = [];
    const value: number[] = [];

    try {
      setLoading(true);
      const response = await axios.get(url);
      const dataResponse = await response.data;
      dataResponse["transactions-per-age"].map((item: any) => {
        category.push(item.category);
        value.push(item.value);
      });
      setData(value);
      setAge(category);
      setLoading(false);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <CardChart select={false} title="Transações por idade">
      {loading ? (
        <CustomSpinner size="sm" />
      ) : (
        <Chart
          options={{
            chart: {
              id: "Sales per month",
            },
            dataLabels: {
              enabled: false,
            },
            colors: ["#000"],
            xaxis: {
              categories: age,
            },
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            yaxis: {
              labels: {
                formatter(value) {
                  return currencyConverter(value);
                },
              },
            },
          }}
          series={[
            {
              data,
            },
          ]}
          type="bar"
          width={450}
          height={300}
        />
      )}
    </CardChart>
  );
}

export default ChartTransactions;
