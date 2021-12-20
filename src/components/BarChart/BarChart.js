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
import "./BarChart.css";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ allSearches, setAllSearches, onlySearchTermsAndHits }) {

  const labels = onlySearchTermsAndHits.map((searchObj) => {
    return searchObj.query;
  });

  const hitData = onlySearchTermsAndHits.map((searchObj) => {
    return parseInt(searchObj.hits, 10);
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Top Search Hits",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Hits Per Search Term",
        data: hitData,
        backgroundColor: ["green", "black"],
      },
    ],
  };

  return <Bar className="bar-chart" options={options} data={data} />;
}

export default BarChart;
