import React from "react";
import Chart from "react-apexcharts";
import CardChart from "../commons/CardChart";
import CustomSpinner from "../../helpers/CustomSpinner";

interface IGender {
  series: number[];
  loading: boolean;
}

function ChartGender({ series, loading }: IGender) {
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
