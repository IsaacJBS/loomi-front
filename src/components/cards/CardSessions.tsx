import React, { useState, useEffect } from "react";
import Card from "../commons/Card";
import axios from "../../api/axios";

const conversionUrl = "/conversions-resume";

function CardSessions() {
  const [values, setValues] = useState<string>("");
  const [growths, setGrowths] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get(conversionUrl);
      const responseData = Object.values(response.data);
      const formatted: any = responseData[0];
      setValues(formatted.value);
      setGrowths(formatted.growth);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
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

export default CardSessions;
