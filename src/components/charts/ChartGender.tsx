import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import axios from "../../api/axios";
import CustomSpinner from "../../helpers/CustomSpinner";

const url = "/users-resume";

function ChartGender() {
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState<any>();

  async function getSessionsPerGender() {
    try {
      const gender = [];
      setLoading(true);
      const response = await axios.get(url);
      const dataResponse = await response.data;
      const sessionsPerGender = dataResponse["sessions-per-sex"];
      gender.push(sessionsPerGender.male);
      gender.push(sessionsPerGender.female);
      setSeries(gender);
      console.log(typeof gender);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSessionsPerGender();
  }, []);

  return (
    <CardChart select={false} title="Sessões por gênero">
      {loading ? (
        <CustomSpinner size="sm" />
      ) : (
        <Chart
          options={{
            labels: ["Masculino", "Feminino"],
            dataLabels: {
              enabled: false,
            },
            colors: ["#F7C982", "#393C56"],
          }}
          series={series}
          type="donut"
          width={450}
          height={300}
        />
      )}
    </CardChart>
  );
}

export default ChartGender;
