import React, { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import moment from "moment";

export function TransactionsCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const transactionArray = [];
  const transactions = userInfo.transactions;

  const LIMIT = 40;
  let current = 0;
  if (transactions.length > 0) {
    for (let trans of transactions) {
      if (current >= LIMIT) break;

      transactionArray.push(
        <motion.div
          animate={{
            opacity: 1,
            width: "100%",
          }}
          initial={{
            opacity: 0,
            width: "100%",
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
              justifyContent: "center",
              alignContent: "stretch",
              flexDirection: "row",
              padding: "2px",
              borderRadius: "3px"
            }}
          >
            <div id="transaction-container">
            {/* <Box
              sx={{
                width: "50%",
                height: "max-content",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                width: "100%",
                paddingLeft: "20px",
              }}
            > */}
              <div className="amount">
                <Typography>{trans.amount}</Typography>
              </div>
              <div className="date">
                <Typography>
                  {moment(trans.dates).format("MMMM DD, YYYY")}
                </Typography>
              </div>
              <div className="merchant">
                <Typography>{trans.merchant}</Typography>
              </div>
              <div className="category">
                <Typography 
                  sx={{
                    fontTransform: "uppercase",
                    color: "$mediumgrey",
                    paddingLeft: "3px",
                    fontSize: "15px",
                  }}
                >{trans.cat_name}</Typography>
              </div>
          </div>
          </Box>
        </motion.div>
      );
      current += 1;
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
        overflow: "auto",
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
            overflow: "auto",
          }}
        >
          {transactionArray}
        </Box>
      )}
    </Paper>
  );
}
