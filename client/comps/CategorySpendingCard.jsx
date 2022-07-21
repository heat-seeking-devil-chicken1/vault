import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";
import { SpendingDoughnutChart } from "./SpendingDoughnutChart.jsx";
import { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";

export function CategorySpendingCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  return (
    <Paper
      elevation={12}
      sx={{
        height: "100%",
        width: "100%",
        borderRadius: "20px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
        }}
      >
        SPENDING CATEGORIES
      </Typography>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignitems: "center",
        }}
      >
        {userInfo.loggedIn && <SpendingDoughnutChart redraw />}
      </Box>
    </Paper>
  );
}
