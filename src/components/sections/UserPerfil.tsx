import React from "react";
import Carousel from "../Carousel";
import ChartTransactions from "../charts/ChartTransactions";
import ChartGender from "../charts/ChartGender";
import ChartTransactionPerClient from "../charts/ChartTransactionsPerClient";

function UserPerfil() {
  return (
    <Carousel name="Perfil do usuário">
      <ChartTransactions />
      <ChartGender />
      <ChartTransactionPerClient />
    </Carousel>
  );
}

export default UserPerfil;
