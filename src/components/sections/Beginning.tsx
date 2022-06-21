import React from "react";
import Carousel from "../Carousel";
import CardAverageTicket from "../cards/CardAverageTicket";
import CardAverageMonthly from "../cards/CardAverageMonthly";
import CardOrdersMonth from "../cards/CardOrdersMonth";
import CardProductsSold from "../cards/CardProductsSold";

function Beginning() {
  return (
    <Carousel name="Inicio">
      <CardAverageTicket />
      <CardAverageMonthly />
      <CardOrdersMonth />
      <CardProductsSold />
    </Carousel>
  );
}

export default Beginning;
