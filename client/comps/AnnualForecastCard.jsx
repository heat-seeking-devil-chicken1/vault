import React from "react";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";

export function AnnualForecastCard() {
  return (
    <Paper
      elevation={12}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <Typography>ANNUAL FORECAST</Typography>
    </Paper>
  );
}
