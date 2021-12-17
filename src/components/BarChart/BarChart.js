import React, { useState } from "react";
import { Doughnut, Bar, Pie } from "react-chartjs-2";

function BarChart() {
    
  // let worldCitiesPopDensity = {
  //     chartData: {
  //       labels: [
  //         "Manila, Philippines",
  //         "Pateros, Philippines",
  //         "Mandaluyong, Philippines",
  //         "Baghdad, Iraq",
  //         "Mumbai, India",
  //         "Dhaka, Bangladesh",
  //         "Caloocan, Philippines",
  //         "Port-au-Prince, Haiti",
  //         "Bnei Brak, Israel",
  //         "Levallois-Perret, France",
  //       ],
  //       datasets: [
  //         {
  //           label: "Population",
  //           data: [
  //             119600, 94400, 90460, 85140, 83660, 75290, 72490, 70950, 70810,
  //             68460,
  //           ],
  //           backgroundColor:[
  //               "red", "orange", "yellow", "green", "blue", "purple"
  //           ]
  //         },
  //       ],
  //     },
  //   };

  //   const [chartData, setChartData] = useState(worldCitiesPopDensity);
  
    return (
      <div className="chart">
        <h1>HEY!!!</h1>
        {/* <Bar
          data={chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        /> */}
      </div>
    );
  }

export default BarChart;
