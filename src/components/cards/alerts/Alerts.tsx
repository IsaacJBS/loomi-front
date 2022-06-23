import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
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
    <Flex flexWrap="wrap">
      {alerts.map((alert: IAlerts) => (
        <Card
          title={alert.type}
          text="Urgente"
          overdue
          bold={false}
          semiBold={false}
          value={alert.value}
          secondValue="produtos"
          tag="20"
          loading={loading}
          percent={false}
        />
      ))}
    </Flex>
  );
}

export default Alerts;
