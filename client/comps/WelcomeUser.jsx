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
import { Sailing } from "@mui/icons-material";

export function WelcomeUser() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const [currentDate, setCurrentDate] = useState("2022-07-12");
  const [savings, setSavings] = useState(0);
  const [listSavings, setListSavings] = useState([]);

  let currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function registerSavings(date, savings) {
    const arraySavings = [];
    const currentSavingsGoal = [];
    for (let comp of listSavings) {
      currentSavingsGoal.push({
        amount: savings,
        date: date,
      });
      // get current listings
      arraySavings.push(comp);
    }
    // add new listings
    arraySavings.push(
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            width: "50%",
            textAlign: "left",
          }}
        >
          {moment(currentDate).format("MMMM/DD/yyyy")}
        </Typography>
        <Typography
          sx={{
            width: "50%",
            textAlign: "right",
          }}
        >
          {currencyFormatter.format(savings)}
        </Typography>
      </Box>
    );
    currentSavingsGoal.push({
      amount: savings,
      date: date,
    });
    setListSavings(arraySavings);
    setUserInfo({
      ...userInfo,
      savingsGoal: currentSavingsGoal,
    });
  }

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
        <Avatar sx={{
          height: "80px",
          width: "80px",
        }}
        src={userInfo.avatar}></Avatar>
        {userInfo.loggedIn && <Typography
          sx={{
            fontWeight: "600",
            fontSize: "25px",
          }}
        >
          Welcome, {userInfo.user_name}
        </Typography>}
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
          <TextField
            label="Goals"
            onChange={(e) => {
              setSavings(e.target.value);
            }}
          ></TextField>
          <Button
            onClick={() => {
              registerSavings(currentDate, savings);
            }}
          >
            SUBMIT
          </Button>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          {listSavings}
        </Paper>
      </Box>
    </Paper>
  );
}
