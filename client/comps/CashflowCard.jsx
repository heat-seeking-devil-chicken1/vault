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
    labels: ["SPENDING", "EARNIGS"],
    datasets: [
      {
        data: [spending, income],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
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
        CASH FLOW
      </Typography>
      <Box
        sx={{
          maxHeight: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        {userInfo.loggedIn && <Pie data={data} />}
      </Box>
    </Paper>
  );
}
