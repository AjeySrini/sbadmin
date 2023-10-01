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

const labels = ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"];

export const data = {
  labels,
  datasets: [
    {
      label: "",
      data: [0, 1000,500,2000,1500,3000,2500,4000,3500,5000,4500, 6000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      tension: 0.3
    }
  ]
};

export function LineChart() {

  return <Line data={data}  options={options}/>;
}