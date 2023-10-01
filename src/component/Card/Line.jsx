import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
 
  plugins: {
    legend: {
      position: "top",
      display: false
    },
    title: {
      display: false,
      text: "Chart.js Line Chart"
    }
  }
};

const labels = ["January", "February", "March", "April", "May", "June", "July","August"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [0, 5000, 4000, 9000, 11000, 15000, 20000,25000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.3
    }
  ]
};

export function LineChart() {

  return <Line data={data}  options={options}/>;
}