import React from "react";
import Card from "../commons/Card";
import IConversions from "../../interfaces/IConversions";

function CardProductsView({ value, growth, loading }: IConversions) {
  return (
    <Card
      title="Visualizações de produto"
      text="em relação a julho"
      overdue={false}
      bold={false}
      semiBold={false}
      value={value}
      percent
      tag={growth}
      secondValue="visualizações"
      loading={loading}
    />
  );
}

export default CardProductsView;
