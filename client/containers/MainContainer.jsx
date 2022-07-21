import React, { useState, useEffect, useContext, createContext } from "react";
import { Grid, Container, Paper, AppBar, Box, autocompleteClasses } from '@mui/material';
import "../stylesheets/styles.scss";
import Header from "../comps/Header.jsx";
import Footer from "../comps/Footer.jsx";
import { CategorySpendingCard } from "../comps/CategorySpendingCard.jsx";
import { MonthlySpendingCard } from "../comps/MonthlySpendingCard.jsx";
import { WelcomeUser } from "../comps/WelcomeUser.jsx";
import { TransactionsCard } from "../comps/TransasctionsCard.jsx";
import { CashflowCard } from "../comps/CashflowCard.jsx";
import { AnnualForecastCard } from "../comps/AnnualForecastCard.jsx";
export const InfoContext = createContext();

export function MainContainer() {
  const [userInfo, setUserInfo] = useState({
    loggedIn: false,
    avatar: "",
    user_name: "",
    accounts: [], // { accountName: "", accountBalance: 0, accountType: "" }
    transactions: [], // { transactionName: "", transactionAmount: 0, transactionDate: "" }
    categories: [], // { categoryName: ''}
    allSum: 0,
    incomeArray: [],
    totalIncome: 0,
  });

  useEffect(() => {
    if (userInfo.loggedIn) {
      console.log(userInfo);
    }
  }, [userInfo]);

  // Full viewport, inner grid system
  const outerGridContainer = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "50px 1fr 50px",
    height: "100vh",
    gap: "0px 0px",
    gridTemplateAreas: `    
    "Header"
    "CardContainer"
    "Footer"`
  }

  // const innerGridContainer = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(3, 1fr)",
  //   gridAutoRows: "minmax(300px, 1fr)"
  // };

  const innerGridContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "50% 50%",
    gap: "20px",
    height: "87vh",
    padding: "20px",
    gridTemplateAreas: ` 
      "Profile Monthly Category Transactions"
      "CashFlow Annual Annual Annual"
      `,
    gridArea: "CardContainer",
    overFlowY: "auto"
  };
  return (
    <>
      <Grid container sx={outerGridContainer}>
        <InfoContext.Provider value={[userInfo, setUserInfo]}>
          <Box item sx={{ gridArea: "Header" }}>
            <Header />
          </Box>
          <Grid container sx={innerGridContainer}>
            <Paper item className="gridCard" sx={{ gridArea: "Profile" }}>
              <WelcomeUser />
            </Paper>
            <Paper item className="gridCard" sx={{ gridArea: "Monthly" }}>
              <MonthlySpendingCard />
            </Paper>
            <Paper item className="gridCard" sx={{ gridArea: "Category" }}>
              <CategorySpendingCard />
            </Paper>
            <Paper item className="gridCard" sx={{ gridArea: "Annual", overflowY: "auto" }}>
              <AnnualForecastCard />
            </Paper>
            <Paper item className="gridCard" sx={{ gridArea: "CashFlow" }}>
              <CashflowCard></CashflowCard>
            </Paper>
            <Paper item className="gridCard" sx={{ gridArea: "Transactions", overflowY: "auto" }}>
              <TransactionsCard />
            </Paper>
          </Grid>

          <Box item sx={{ gridArea: "Footer" }}>
            <Footer />
          </Box>
        </InfoContext.Provider>
      </Grid >
    </>
  );
}

export default MainContainer;
