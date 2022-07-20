import React from "react";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";

export function WelcomeUser() {
  return (
    <Paper
      elevation={12}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          height: "10%",
        }}
      >
        <Avatar></Avatar>
        {/* blank for info of user */}
      </Box>
    </Paper>
  );
}
