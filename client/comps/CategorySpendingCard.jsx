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
        width: "auto",
        display: "flex",
        flexDirection: "column",
        padding: "40px",
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
        SPENDING CATEGORIES
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
        {userInfo.loggedIn && <SpendingDoughnutChart redraw />}
      </Box>
    </Paper>
  );
}
