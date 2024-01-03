import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency }) => {
  const prices = [1, 2, 34];
  const date = ["12/1/10", "12/1/22", "22/2/23"];

  for (let i = 0; i < arr.length; i++) {
    date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }
  console.log(date);

  return (
    <Line
      options={{ responsive: true }}
      data={{
        labels: date,
        datasets: [
          {
            label: `price in ${currency}`,
            data: prices,
            borderColor: "rgb(222, 12, 34)",
            backgroundColor: "rgb(222, 12, 34, 0.4)",
          },
        ],
      }}
    />
  );
};

export default Chart;
