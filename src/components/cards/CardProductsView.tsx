import React, { useState, useEffect } from "react";
import Card from "../commons/Card";
import axios from "../../api/axios";

const conversionUrl = "/conversions-resume";

function CardProductsView() {
  const [values, setValues] = useState<string>("");
  const [growths, setGrowths] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  async function getData() {
    try {
      setLoading(true);
      const response = await axios.get(conversionUrl);
      const responseData = Object.values(response.data);
      const formatted: any = responseData[1];
      setValues(formatted.value);
      setGrowths(formatted.growth);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card
      title="Visualizações de produto"
      text="em relação a julho"
      overdue={false}
      bold={false}
      semiBold={false}
      value={values}
      percent
      tag={growths}
      secondValue="visualizações"
      loading={loading}
    />
  );
}

export default CardProductsView;
