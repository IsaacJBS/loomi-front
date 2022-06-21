import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import axios from "../../api/axios";

const sellMonth = "/sells-month";

function CardProductsSold() {
  const [values, setValues] = useState<string>("");
  const [growths, setGrowths] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  async function getAverageTicket() {
    try {
      setLoading(true);
      const response = await axios.get(sellMonth);
      const { value, growth } = response.data;
      setValues(value);
      setGrowths(growth);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAverageTicket();
  }, []);

  return (
    <Card
      title="Pedidos vendidos no mês"
      text="em relação a julho"
      overdue={false}
      bold={false}
      semiBold={false}
      value={values}
      percent
      tag={growths}
      secondValue="produtos"
      loading={loading}
    />
  );
}

export default CardProductsSold;
