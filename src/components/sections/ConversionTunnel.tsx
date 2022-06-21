import React from "react";
import Carousel from "../Carousel";
// import axios from "../../api/axios";
import CardSessions from "../cards/CardSessions";
import CardProductsView from "../cards/CardProductsView";
import CardConversion from "../cards/CardConversion";

function ConversionTunnel() {
  return (
    <Carousel name="Funil de conversão">
      <CardSessions />
      <CardProductsView />
      <CardConversion />
    </Carousel>
  );
}

export default ConversionTunnel;
