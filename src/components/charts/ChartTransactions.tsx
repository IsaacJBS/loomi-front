import React from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import CustomSpinner from "../../helpers/CustomSpinner";
import currencyConverter from "../../utils/currencyConverter";

interface ITransactions {
  age: number[];
  data: number[];
  loading: boolean;
}

function ChartTransactions({ age, data, loading }: ITransactions) {
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
              name: "Transações",
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
