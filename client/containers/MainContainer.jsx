import React, { useState, useEffect, useContext, createContext } from "react";
import { Grid, Container } from '@mui/material';
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

  // Fixed number of columns
  const gridContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "minmax(400px, 1fr)",
    marginTop: "40px",
    height: "93vh"
  };

  // Variable number of columns
  const gridContainer2 = {
    display: "grid",
    gridAutoColumns: "1fr",
    gridAutoFlow: "column"
  };

  return (
    <>
      <Container maxWidth="false">
        <InfoContext.Provider value={[userInfo, setUserInfo]}>
          <Header />
          <Grid container spacing={4} className="outer-grid" direction="column" sx={gridContainer}>
            <Grid item lg>
              <WelcomeUser />
            </Grid>
            <Grid item lg>
              <CashflowCard></CashflowCard>
            </Grid>
            <Grid item lg>
              <AnnualForecastCard />
            </Grid>

            <Grid item lg>
              <MonthlySpendingCard />
            </Grid>
            <Grid item lg>
              <CategorySpendingCard />
            </Grid>
            <Grid item lg>
              <TransactionsCard />
            </Grid>
          </Grid>
        </InfoContext.Provider>
        <div className="footer">
          <Footer />
        </div>
      </Container>
    </>
  );
}

export default MainContainer;
