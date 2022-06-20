import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import axios from "../../api/axios";
import CustomSpinner from "../../helpers/CustomSpinner";
import months from "../../utils/months";
import currencyConverter from "../../utils/currencyConverter";

const profitUrl = "/profit-expectation-per-month";
const realUrl = "/profit-per-month";

function ProfitExpectation() {
  const [real, setReal] = useState<any>();
  const [profit, setProfit] = useState<any>();
  const [loading, setLoading] = useState(false);

  async function getProfit() {
    const valuesProfit: number[] = [];
    try {
      setLoading(true);
      const response = await axios.get(profitUrl);
      const dataResponse = await response.data;
      dataResponse.map((item: any) => {
        return valuesProfit.push(item.value);
      });
      setProfit(valuesProfit);
    } catch (error) {
      console.log(error);
    }
  }

  async function getReal() {
    const valuesReal: number[] = [];
    try {
      const response = await axios.get(realUrl);
      const dataResponse = await response.data;
      dataResponse.map((item: any) => {
        return valuesReal.push(item.value);
      });
      setReal(valuesReal);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfit();
    getReal();
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
            yaxis: {
              labels: {
                formatter(value) {
                  return currencyConverter(value);
                },
              },
            },
          }}
          series={[
            {
              name: "Expectativa",
              data: profit,
              color: "#F78899",
            },
            {
              name: "Real",
              data: real,
              color: "#9FD8D5",
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

export default ProfitExpectation;
