import React from "react";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";

export function WelcomeUser() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  return (
    <Box
      sx={{
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
  );
}
