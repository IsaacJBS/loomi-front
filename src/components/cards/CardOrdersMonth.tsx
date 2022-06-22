import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import axios from "../../api/axios";

const ordersMonth = "/orders-month";

function CardOrdersMonth() {
  const [values, setValues] = useState<string>("");
  const [growths, setGrowths] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  async function getAverageTicket() {
    try {
      setLoading(true);
      const response = await axios.get(ordersMonth);
      const { value, growth } = response.data;
      setValues(value);
      setGrowths(growth);
    } catch (error: any) {
      throw new Error("An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAverageTicket();
  }, []);

  return (
    <Card
      title="Pedidos realizados no mês"
      text="em relação a julho"
      overdue={false}
      bold={false}
      semiBold={false}
      value={values}
      percent
      tag={growths}
      secondValue="pedidos"
      loading={loading}
    />
  );
}

export default CardOrdersMonth;
