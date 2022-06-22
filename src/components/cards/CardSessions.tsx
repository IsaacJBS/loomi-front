import React from "react";
import Card from "../commons/Card";
import IConversions from "../../interfaces/IConversions";

function CardSessions({ value, growth, loading }: IConversions) {
  return (
    <Card
      title="Sessões"
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

export default CardSessions;
