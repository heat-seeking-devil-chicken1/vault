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
  const [currentDate, setCurrentDate] = useState("2022-07-22");
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
      // get current listings
      arraySavings.push(comp);
    }

    for (let saves of userInfo.savingsGoal) {
      console.log(saves);
      currentSavingsGoal.push({
        amount: saves.amount,
        date: saves.date,
      });
    }

    // add new listings
    arraySavings.push(
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "20%",
          border: ".5px dotted #8080808a",
          backgroundColor: "#f6f6f6",
          margin: "2px",
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
            color: "#7068f4",
            fontWeight: "500"
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
    <Box
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
        <Avatar
          sx={{
            height: "60px",
            width: "60px",
          }}
          src={userInfo.avatar}
        ></Avatar>
        {userInfo.loggedIn && (
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "25px",
            }}
          >
            {userInfo.user_name}
          </Typography>
        )}
        {/* blank for info of user */}
      </Box>

      <Divider />
      {/* appears when user logs into the application */}
      {userInfo.loggedIn && (
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
          <Box
            className="goalsForm"
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
              className="goalsButton"
              onClick={() => {
                registerSavings(currentDate, savings);
              }}
            >
              SUBMIT
            </Button>
          </Box>
          <Box
            elevation={3}
            sx={{
              width: "90%",
              height: "30%",
              overflow: "auto",
              marginTop: "-10px",   
            }}
          >
            {listSavings}
          </Box>
        </Box>
      )}
    </Box>
  );
}
