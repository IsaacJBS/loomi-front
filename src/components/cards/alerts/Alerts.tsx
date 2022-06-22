import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import Card from "../../commons/Card";

const url = "/alerts";

interface IAlerts {
  type: string;
  value: number;
  since?: string;
}
function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  async function getAlerts() {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setAlerts(response.data);
    } catch (error) {
      throw new Error("An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAlerts();
  }, []);
  return (
    <>
      {alerts.map((alert: IAlerts) => {
        <Card
          title={alert.type}
          text=""
          overdue
          bold={false}
          semiBold
          value={alert.value}
          secondValue="produtos"
          tag="há 20 dias"
          loading={loading}
          percent={false}
        />;
      })}
    </>
  );
}

export default Alerts;
