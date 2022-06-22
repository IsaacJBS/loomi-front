import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import axios from "../../api/axios";
import CustomSpinner from "../../helpers/CustomSpinner";
// import currencyConverter from "../../utils/currencyConverter";

const url = "/users-resume";

function ChartTransactionPerClient() {
  const [loading, setLoading] = useState(false);
  const [transactionsValues, setTransactionsValues] = useState<any>();

  async function getTransactions() {
    const newTransaction: string[] = [];
    try {
      setLoading(true);
      const response = await axios.get(url);
      const dataResponse = await response.data;
      const transactions = dataResponse["transactions-per-client-type"];
      transactions.map((transaction: any) => {
        newTransaction.push(transaction.value);
      });
      setTransactionsValues(newTransaction);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

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
