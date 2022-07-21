import React, { useContext } from "react";
import { InfoContext } from "../containers/MainContainer.jsx";
import { Paper, Typogrpahy, Avatar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import moment from "moment";

export function TransactionsCard() {
  const [userInfo, setUserInfo] = useContext(InfoContext);
  const transactionArray = [];
  const transactions = userInfo.transactions;

  const LIMIT = 100;
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
              borderRadius: "5px",

            }}
          >
            <div id="transaction-container">
              <div className="date">
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  {moment(trans.dates).format("MMMM DD, YYYY")}
                </Typography>
              </div>
              <div className="transactionsInnerDiv">
                <div className="merchant">
                  <Typography
                    sx={{
                      paddingLeft: "3px",
                      fontSize: "1.5em",
                      paddingBottom: "0",
                    }}
                  >
                    {trans.merchant}
                  </Typography>
                </div>
                <div className="amount">
                  <Typography
                    sx={{
                      color: "#7068f4",
                      fontSize: "25px",
                      textAlign: "center",
                    }}
                  >
                    {trans.amount}
                  </Typography>
                </div>
              </div>
              <div className="category">
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    color: "$mediumgrey",
                    paddingLeft: "3px",
                    fontSize: "1em",
                  }}
                >
                  {trans.cat_name}
                </Typography>
              </div>
            </div>

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
        <Box className="cardTitle">
          TRANSACTIONS
        </Box>
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
