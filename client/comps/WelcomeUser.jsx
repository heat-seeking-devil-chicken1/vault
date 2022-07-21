import React, { useState } from "react";
import {
  Paper,
  Divider,
  TextField,
  Avatar,
  Box,
  Typography,
  InputAdornment,
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
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: "30%",
        }}
      >
        <TextField
          label="Amount"
          id="filled-start-adornment"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        ></TextField>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Transaction Date"
            value={currentDate}
            inputFormat="MM/dd/yyyy"
            onChange={(newValue) => {
              console.log(moment(newValue).format("YYYY-MM-DD"));
              setCurrentDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          ></DesktopDatePicker>
        </LocalizationProvider>
      </Paper>
    </Paper>
  );
}
