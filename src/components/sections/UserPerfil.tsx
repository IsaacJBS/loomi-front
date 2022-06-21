import React from "react";
import Carousel from "../Carousel";
import ChartTransactions from "../charts/ChartTransactions";
import ChartGender from "../charts/ChartGender";

function UserPerfil() {
  return (
    <Carousel name="Perfil do usuário">
      <ChartTransactions />
      <ChartGender />
    </Carousel>
  );
}

export default UserPerfil;
