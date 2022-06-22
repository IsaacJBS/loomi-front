import React from "react";
import Card from "../commons/Card";
import IConversions from "../../interfaces/IConversions";

function CardAddToCart({ value, growth, loading }: IConversions) {
  return (
    <Card
      title="Adições ao carrinho"
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

export default CardAddToCart;
