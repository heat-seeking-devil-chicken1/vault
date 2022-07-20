import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";
import { SpendingDoughnutChart } from "./SpendingDoughnutChart.jsx";

export function CategorySpendingCard() {
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
        <SpendingDoughnutChart redraw />
      </Box>
    </Paper>
  );
}
