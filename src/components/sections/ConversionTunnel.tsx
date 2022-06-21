import React from "react";
import Carousel from "../Carousel";
// import axios from "../../api/axios";
import CardSessions from "../cards/CardSessions";
import CardProductsView from "../cards/CardProductsView";
import CardConversion from "../cards/CardConversion";
import CardAddToCart from "../cards/CardAddToCart";
import CardCheckout from "../cards/CardCheckout";
import CardCheckoutRegistration from "../cards/CardCheckoutRegistration";
import CardCheckoutShipping from "../cards/CardCheckoutShipping";

function ConversionTunnel() {
  return (
    <Carousel name="Funil de conversão">
      <CardSessions />
      <CardProductsView />
      <CardConversion />
      <CardAddToCart />
      <CardCheckout />
      <CardCheckoutRegistration />
      <CardCheckoutShipping />
    </Carousel>
  );
}

export default ConversionTunnel;
