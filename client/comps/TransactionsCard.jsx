import React from "react";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";

export function TransactionsCard() {

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
        TRANSACTIONS
      </Typography>
    </Paper>
  );
}
