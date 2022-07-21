import React, { useContext } from "react";
import { InfoContext } from "../containers/MainContainer";
import { Paper, Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function AnnualForecastCard() {
  const data = {
    labels,
    datasets: [
      {
        label: "SAVINGS PER MONTH",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Paper
      elevation={12}
      sx={{
        width: "100%",
        height: "100%",
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
        ANNUAL FORECAST SAVINGS
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Line options={options} data={data} />
      </Box>
    </Paper>
  );
}
