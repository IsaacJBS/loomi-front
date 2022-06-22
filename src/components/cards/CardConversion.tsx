import React from "react";
import Card from "../commons/Card";
import IConversions from "../../interfaces/IConversions";

function CardConversion({ value, growth, loading }: IConversions) {
  return (
    <Card
      title="Conversão para a página de produtos"
      text="em relação a julho"
      overdue
      bold={false}
      semiBold={false}
      value={value}
      percent
      tag={growth}
      secondValue="%"
      loading={loading}
    />
  );
}

export default CardConversion;
