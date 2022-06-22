import React from "react";
import Card from "../commons/Card";
import IConversions from "../../interfaces/IConversions";

function CardCheckoutShipping({ value, growth, loading }: IConversions) {
  return (
    <Card
      title="Checkout - Entrega"
      text="em relação a julho"
      overdue={false}
      bold={false}
      semiBold={false}
      value={value}
      percent
      tag={growth}
      secondValue="produtos"
      loading={loading}
    />
  );
}

export default CardCheckoutShipping;
