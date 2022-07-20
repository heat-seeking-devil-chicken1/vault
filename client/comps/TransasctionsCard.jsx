import React from "react";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";

export function TransactionsCard() {
  
  return (
    <Paper
      elevation={12}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
        }}
      >
        TRANSACTIONS
      </Typography>
    </Paper>
  );
}
