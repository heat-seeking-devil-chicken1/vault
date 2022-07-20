import React from "react";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";

export function WelcomeUser() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "20px",
          width: "100%",
          height: "10%",
        }}
      >
        <Avatar src={userInfo.avatar}></Avatar>
        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          {userInfo.user_name}
        </Typography>
        {/* blank for info of user */}
      </Box>
    </Paper>
  );
}
