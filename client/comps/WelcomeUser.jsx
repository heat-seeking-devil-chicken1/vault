import React, { useState } from "react";
import {
  Paper,
  Divider,
  TextField,
  Avatar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";
import moment from "moment";

export function WelcomeUser() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const [currentDate, setCurrentDate] = useState("2022-07-12");
  return (
    <Paper
      elevation={12}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
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
          paddingLeft: "20px",
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

      <Divider />
      {/* appears when user logs into the application */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "100%",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          SAVINGS GOALS
        </Typography>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "max-content",
            paddingTop: "20px",
            paddingBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/dd/yyyy"
              value={currentDate}
              onChange={(newValue) => setCurrentDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField label="Goals"></TextField>
          <Button>SUBMIT</Button>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
          }}
        ></Paper>
      </Box>
    </Paper>
  );
}
