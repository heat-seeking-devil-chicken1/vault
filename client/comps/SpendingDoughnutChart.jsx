import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { InfoContext } from "../containers/MainContainer.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);

export function SpendingDoughnutChart() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  const data = {
    labels: [
      "Bill & Utilities",
      "Entertainment",
      "Shopping",
      "Health & Wellness",
      "Transportation",
      "Education",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          parseFloat(userInfo.categories[0].sum.slice(1).split(",").join("")),
          parseFloat(userInfo.categories[1].sum.slice(1).split(",").join("")),
          parseFloat(userInfo.categories[2].sum.slice(1).split(",").join("")),
          parseFloat(userInfo.categories[3].sum.slice(1).split(",").join("")),
          parseFloat(userInfo.categories[4].sum.slice(1).split(",").join("")),
          parseFloat(userInfo.categories[5].sum.slice(1).split(",").join("")),
          // 13,
          // 6, 8, 3, 2, 1,
        ],
        backgroundColor: [
          "rgba(112, 104, 244, 0.4)",
          "rgba(123, 31, 162, 0.4)",
          "rgba(162, 31, 118, 0.4)",
          "rgba(255, 100, 180, 0.4)",
          "rgba(255, 125, 69, 0.4)",
          "rgba(255, 217, 74, 0.4)",
        ],
        borderColor: [
          "rgba(112, 104, 244, 1)",
          "rgba(123, 31, 162, 1)",
          "rgba(162, 31, 118, 1)",
          "rgba(255, 100, 180, 1)",
          "rgba(255, 125, 69, 1)",
          "rgba(255, 217, 74, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <>
    <div className="chartDiv">
      <Doughnut data={data} options={options} />
    </div>
  </>

    ;
}
