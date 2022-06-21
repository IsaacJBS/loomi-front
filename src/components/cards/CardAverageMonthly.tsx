import React, { useEffect, useState } from "react";
import Card from "../commons/Card";
import axios from "../../api/axios";
import currencyConverter from "../../utils/currencyConverter";

const monthlyTicketUrl = "/avg-ticket-month";

function CardAverageMonthly() {
  const [values, setValues] = useState<string>("");
  const [growths, setGrowths] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  async function getAverageTicket() {
    try {
      setLoading(true);
      const response = await axios.get(monthlyTicketUrl);
      const { value, growth } = response.data;
      const formmatedValue = currencyConverter(value);
      setValues(formmatedValue);
      setGrowths(growth);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAverageTicket();
  }, []);

  return (
    <Card
      title="Ticket médio mensal"
      text="em relação a julho"
      overdue
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

export default CardAverageMonthly;
