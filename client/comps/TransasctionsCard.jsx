import React, { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import moment from "moment";

export function TransactionsCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const transactionArray = [];
  const transactions = userInfo.transactions;

  const LIMIT = 35;
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
              // width: "100%",
              // height: "max-content",
              // display: "flex",
              // flexDirection: "row",
              // width: "100%",
            }}
          >
            <Box
              sx={{
                // width: "50%",
                // height: "max-content",
                // display: "flex",
                // flexDirection: "row",
                // alignItems: "flex-start",
                // width: "100%",
                // paddingLeft: "20px",
              }}
            >
              <Typography>{trans.amount}</Typography>
            </Box>
            <Box
              sx={{
                // width: "50%",
                // height: "max-content",
                // display: "flex",
                // flexDirection: "row",
                // alignItems: "flex-end",
                // justifyContent: "flex-end",
                // paddingRight: "20px",
              }}
            >
              <Typography>
                {moment(trans.dates).format("MMMM DD, YYYY")}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      );
      current += 1;
    }
  }

  return (
    <Box className="transactionsList" sx={{
      maxHeight: "400px",
      // overflowY: "auto"
    }}>
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
            // overflow: "scroll",
          }}
        >
          {transactionArray}
        </Box>
      )}
    </Box>
  );
}
