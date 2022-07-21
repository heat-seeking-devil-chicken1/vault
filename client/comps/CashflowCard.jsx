import React, { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function CashflowCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  let spending = userInfo.allSum;
  let income = userInfo.totalIncome;
  if (spending) {
    spending = parseFloat(spending.slice(1).split(",").join(""));
  }
  if (income) {
    income = parseFloat(income.slice(1).split(",").join(""));
  }

  const data = {
    labels: ["SPENDING", "EARNINGS"],
    datasets: [
      {
        data: [spending, income],
        backgroundColor: ["rgba(123, 31, 162, 0.4)", "rgba(255, 125, 69, 0.4)"],
        borderColor: ["rgba(123, 31, 162, 1)", "rgba(255, 125, 69, 1)"],
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

  return (
    <Box
      sx={{

      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
        }}
      >
        <Box className="cardTitle">
          CASH FLOW
        </Box>
      </Typography>
      <Box className="cashChart">
        {userInfo.loggedIn && <Pie data={data} options={options} />}
      </Box>
    </Box>
  );
}
