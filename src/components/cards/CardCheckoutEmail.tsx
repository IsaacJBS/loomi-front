import React from "react";
import Card from "../commons/Card";
import IConversions from "../../interfaces/IConversions";

function CardCheckoutEmail({ value, growth, loading }: IConversions) {
  return (
    <Card
      title="Checkout - E-mail"
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

export default CardCheckoutEmail;
