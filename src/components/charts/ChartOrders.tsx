import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import axios from "../../api/axios";
import CustomSpinner from "../../helpers/CustomSpinner";
import months from "../../utils/months";

const orderMadeUrl = "/orders-per-month";
const orderCancelledUrl = "/canceled-orders-per-month";

function ChartOrders() {
  const [made, setMade] = useState<any>();
  const [cancelled, setCancelled] = useState<any>();
  const [loading, setLoading] = useState(false);

  async function getOrdersMade() {
    const ordersMade: number[] = [];
    try {
      setLoading(true);
      const response = await axios.get(orderMadeUrl);
      const dataResponse = await response.data;
      dataResponse.map((item: any) => {
        return ordersMade.push(item.value);
      });
      setMade(ordersMade);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function getCancelledOrders() {
    const cancelledOrders: number[] = [];
    try {
      const response = await axios.get(orderCancelledUrl);
      const dataResponse = await response.data;
      dataResponse.map((item: any) => {
        return cancelledOrders.push(item.value);
      });
      setCancelled(cancelledOrders);
      setLoading(false);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrdersMade();
    getCancelledOrders();
  }, []);

  return (
    <CardChart title="Expectativa de lucro x lucro real">
      {loading ? (
        <CustomSpinner size="sm" />
      ) : (
        <Chart
          options={{
            dataLabels: {
              enabled: false,
            },
            colors: ["#000"],
            xaxis: {
              categories: months,
            },
          }}
          series={[
            {
              name: "Realizados",
              data: made,
              color: "#109E8E",
            },
            {
              name: "Cancelados",
              data: cancelled,
              color: "#F18F7F",
            },
          ]}
          type="bar"
          width={450}
          height={300}
        />
      )}
    </CardChart>
  );
}

export default ChartOrders;
