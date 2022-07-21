import React from "react";
import { Paper, Typography, Divider, Box } from "@mui/material";
import { SpendingDoughnutChart } from "./SpendingDoughnutChart.jsx";
import { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";

export function CategorySpendingCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);

  return (
    <Box
      sx={{

      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
        }}
      >
        SPENDING CATEGORIES
      </Typography>
      {userInfo.loggedIn && <SpendingDoughnutChart redraw />}
    </Box>
  );
}
