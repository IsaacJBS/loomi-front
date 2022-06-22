import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import ChartTransactions from "../charts/ChartTransactions";
import ChartGender from "../charts/ChartGender";
import ChartTransactionPerClient from "../charts/ChartTransactionsPerClient";
import axios from "../../api/axios";

function UserPerfil() {
  const [loading, setLoading] = useState<boolean>(false);
  const [transactionsValues, setTransactionsValues] = useState<any>();
  const [series, setSeries] = useState<any>();
  const [transactionsData, setTransactionsData] = useState<any>();
  const [ageTransactions, setAgeTransactions] = useState<any>();

  const url = "/users-resume";

  async function fetchAllDataUserPerfil() {
    const category: number[] = [];
    const value: number[] = [];

    const gender = [];

    const newTransaction: string[] = [];

    try {
      setLoading(true);
      const response = await axios.get(url);
      const dataResponse = response.data;

      const transactions = dataResponse["transactions-per-age"];
      transactions.map((item: any) => {
        category.push(item.category);
        value.push(item.value);
      });
      setTransactionsData(value);
      setAgeTransactions(category);

      const sessionsPerGender = dataResponse["sessions-per-sex"];
      gender.push(sessionsPerGender.male);
      gender.push(sessionsPerGender.female);
      setSeries(gender);

      const transactionsPerClient =
        dataResponse["transactions-per-client-type"];
      transactionsPerClient.map((transaction: any) => {
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
    fetchAllDataUserPerfil();
  }, []);

  return (
    <Carousel name="Perfil do usuário">
      <ChartTransactions
        age={ageTransactions}
        data={transactionsData}
        loading={loading}
      />
      <ChartGender series={series} loading={loading} />
      <ChartTransactionPerClient
        transactionsValues={transactionsValues}
        loading={loading}
      />
    </Carousel>
  );
}

export default UserPerfil;
