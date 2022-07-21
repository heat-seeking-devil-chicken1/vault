import React, { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";
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
import { Paper, Typography, Box } from "@mui/material";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
    title: {
      display: true,
    },
  },
};

export function MonthlySpendingCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
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

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Earnings",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  // spending display on chart
  if (userInfo.transactions.length > 0) {
    for (let trans of userInfo.transactions) {
      const month = moment(trans.dates).format("MMMM");
      const index = labels.indexOf(month);
      const amount = parseFloat(trans.amount.slice(1).split(",").join(""));
      data.datasets[0].data[index] += amount;
    }
  }

  // income display on chart
  if (userInfo.incomeArray.length > 0) {
    for (let income of userInfo.incomeArray) {
      const month = moment(income.dates).format("MMMM");
      const index = labels.indexOf(month);
      const amount = parseFloat(income.amount.slice(1).split(",").join(""));
      data.datasets[1].data[index] += amount;
    }
  }
  return (
    <Paper
      elevation={12}
      sx={{
        height: "100%",
        width: "auto",
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
        MONTHLY SPENDING
      </Typography>
      <Box
        sx={{
          display: "flex",
          maxHeight: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        {userInfo.loggedIn && (
          <Bar options={options} redraw={true} data={data} />
        )}
      </Box>
    </Paper>
  );
}
