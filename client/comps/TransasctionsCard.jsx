import React, { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import moment from "moment";

export function TransactionsCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const transactionArray = [];
  const transactions = userInfo.transactions;

  if (transactions.length > 0) {
    for (let trans of transactions) {
      transactionArray.push(
        <motion.div
          animate={{
            opacity: 1,
            width: "100%",
            overflowY: "auto",
          }}
          initial={{
            opacity: 0,
            width: "100%",
            overflowY: "auto",
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "max-content",
              display: "flex",
              flexDirection: "row",
              width: "100%",
              overflowY: "auto",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "max-content",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: "100%",
                overflowY: "auto",
              }}
            >
              <Typography>{trans.amount}</Typography>
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "max-content",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Typography>
                {moment(trans.dates).format("MMMM DD, YYYY")}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      );
    }
  }

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
        TRANSACTIONS
      </Typography>
      {userInfo.loggedIn && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            overflowY: "auto",
          }}
        >
          {transactionArray}
        </Box>
      )}
    </Paper>
  );
}
