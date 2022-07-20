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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
