import React, { useEffect } from "react";
// import Chart from "apexcharts";
import CardChart from "./commons/CardChart";
import axios from "../api/axios";

const url = "/sells-per-month";

function ChartSalesPerMonth() {
  // const [category, setCategory] = useState();
  // const [data, setData] = useState();

  async function getItems() {
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getItems();
  }, []);

  return <CardChart title="Vendas por mês">asdasdasd</CardChart>;
}

export default ChartSalesPerMonth;
