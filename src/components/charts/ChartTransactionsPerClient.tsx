import React from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import CustomSpinner from "../../helpers/CustomSpinner";

interface ITransactionPerClient {
  transactionsValues: number[];
  loading: boolean;
}

function ChartTransactionPerClient({
  transactionsValues,
  loading,
}: ITransactionPerClient) {
  return (
    <CardChart select={false} title="Transações por tipo de cliente">
      {loading ? (
        <CustomSpinner size="sm" />
      ) : (
        <Chart
          options={{
            labels: ["Novo cliente", "Cliente retornando"],
            dataLabels: {
              enabled: false,
            },
            colors: ["#9FD8D5", "#7BB686"],
          }}
          series={transactionsValues}
          type="donut"
          width={450}
          height={300}
        />
      )}
    </CardChart>
  );
}

export default ChartTransactionPerClient;
