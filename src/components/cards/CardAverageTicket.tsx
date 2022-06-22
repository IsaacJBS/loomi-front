import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import axios from "../../api/axios";
import currencyConverter from "../../utils/currencyConverter";

const averageTicketUrl = "/avg-ticket-day";

function CardAverageTicket() {
  const [values, setValues] = useState<string>("");
  const [growths, setGrowths] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  async function getAverageTicket() {
    try {
      setLoading(true);
      const response = await axios.get(averageTicketUrl);
      const { value, growth } = response.data;
      const formmatedValue = currencyConverter(value);
      setValues(formmatedValue);
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
      title="Ticket médio últimas 24h"
      text="em relação a ontem"
      overdue={false}
      bold
      semiBold={false}
      value={values}
      percent
      tag={growths}
      secondValue=""
      loading={loading}
    />
  );
}

export default CardAverageTicket;
