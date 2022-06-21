import React from "react";
import Carousel from "../Carousel";
import ChartTransactions from "../charts/ChartTransactions";

function UserPerfil() {
  return (
    <Carousel name="Perfil do usuário">
      <ChartTransactions />
    </Carousel>
  );
}

export default UserPerfil;
