import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "World Cities Population Density",
      },
    },
  };

  const labels = [
    "Manila, Philippines",
    "Pateros, Philippines",
    "Mandaluyong, Philippines",
    "Baghdad, Iraq",
    "Mumbai, India",
    "Dhaka, Bangladesh",
    "Caloocan, Philippines",
    "Port-au-Prince, Haiti",
    "Bnei Brak, Israel",
    "Levallois-Perret, France",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Persons / Square Mile",
        data: [
          119600, 94400, 90460, 85140, 83660, 75290, 72490, 70950, 70810, 68460,
        ],
        backgroundColor: ["red", "orange", "yellow", "green", "blue", "purple"],
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;
