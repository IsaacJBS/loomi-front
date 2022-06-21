import React from "react";
import Carousel from "../Carousel";
import ChartSalesPerMonth from "../charts/ChartSalesPerMonth";
import ProfitExpectation from "../charts/ChartProfitExpectation";
import ChartOrders from "../charts/ChartOrders";

function Dashboard() {
  return (
    <Carousel name="Dashboard de vendas">
      <ChartSalesPerMonth />
      <ProfitExpectation />
      <ChartOrders />
    </Carousel>
  );
}

export default Dashboard;
