import React, { useState, useEffect } from "react";
import Card from "../commons/Card";
import axios from "../../api/axios";

const conversionUrl = "/conversions-resume";

function CardConversion() {
  const [values, setValues] = useState<string>("");
  const [growths, setGrowths] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get(conversionUrl);
      const responseData = Object.values(response.data);
      const formatted: any = responseData[2];
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
      title="Conversão para a página de produtos"
      text="em relação a julho"
      overdue
      bold={false}
      semiBold={false}
      value={values}
      percent
      tag={growths}
      secondValue="%"
      loading={loading}
    />
  );
}

export default CardConversion;
