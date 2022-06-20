/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import axios from "../../api/axios";
import CustomSpinner from "../../helpers/CustomSpinner";

const url = "/sells-per-month";

function ChartSalesPerMonth() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  async function getItems() {
    const month: number[] = [];
    const value: number[] = [];

    try {
      setLoading(true);
      const response = await axios.get(url);
      const dataResponse = await response.data;
      dataResponse.map((item: any) => {
        month.push(item.month);
        value.push(item.value);
      });
      setData(value);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <CardChart title="Pedidos por mês">
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
              categories: [
                "JAN",
                "FEV",
                "MAR",
                "ABR",
                "MAI",
                "JUN",
                "JUL",
                "AGO",
                "SET",
                "OUT",
                "NOV",
                "DEZ",
              ],
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

export default ChartSalesPerMonth;
