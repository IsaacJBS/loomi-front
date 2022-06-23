import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import axios from "../../api/axios";
import CustomSpinner from "../../helpers/CustomSpinner";
import months from "../../utils/months";

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
    } catch (error) {
      throw new Error("An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <CardChart select title="Pedidos por mês">
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
              categories: months,
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
