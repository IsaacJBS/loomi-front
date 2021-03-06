import React from "react";
import Card from "../commons/Card";
import IConversions from "../../interfaces/IConversions";

function CardCheckoutRegistration({ value, growth, loading }: IConversions) {
  return (
    <Card
      title="Checkout - Cadastro"
      text="em relação a julho"
      overdue={false}
      bold={false}
      semiBold={false}
      value={value}
      percent
      tag={growth}
      secondValue="usuários"
      loading={loading}
    />
  );
}

export default CardCheckoutRegistration;
