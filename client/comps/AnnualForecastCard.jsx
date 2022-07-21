import React, { useContext, useEffect } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";
import { Paper, Box, Typography } from "@mui/material";
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
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function AnnualForecastCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  const data = {
    labels,
    datasets: [
      {
        label: "EXPECTED SAVINGS PER MONTH",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "SAVINGS GOAL",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: "blue",
        backgroundColor: "yellow",
      },
    ],
  };

  useEffect(() => {}, [userInfo]);

  if (userInfo.transactions.length > 0 && userInfo.incomeArray.length > 0) {
    // run through transaction array
    for (let trans of userInfo.transactions) {
      const month = moment(trans.dates).format("MMMM");
      const index = labels.indexOf(month);
      const amount = parseFloat(trans.amount.slice(1).split(",").join(""));
      data.datasets[0].data[index] -= amount;
    }

    // run through income array
    for (let income of userInfo.incomeArray) {
      const month = moment(income.dates).format("MMMM");
      const index = labels.indexOf(month);
      const amount = parseFloat(income.amount.slice(1).split(",").join(""));
      data.datasets[0].data[index] += amount;
    }

    if (userInfo.savingsGoal) {
      for (let trans of userInfo.savingsGoal) {
        const month = moment(trans.date).format("MMMM");
        const index = labels.indexOf(month);
        const amount = parseFloat(trans.amount);
        data.datasets[1].data[index] += amount;
      }

      console.log(data.datasets[1].data);
    }
  }

  return (
    <Paper
      elevation={12}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
        }}
      >
        ANNUAL FORECAST SAVINGS
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {userInfo.loggedIn && <Line options={options} data={data} />}
      </Box>
    </Paper>
  );
}
