import React, { useState, useEffect, useContext, createContext } from "react";
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
    savingsGoals: [],
  });

  useEffect(() => {
    if (userInfo.loggedIn) {
    }
  }, [userInfo]);

  return (
    <>
      <div className="grid-container">
        <InfoContext.Provider value={[userInfo, setUserInfo]}>
          <Header />
          <div id="container">
            <div className="Cash-Flow">
              <CashflowCard></CashflowCard>
            </div>
            <div className="Annual-Forecast">
              <AnnualForecastCard></AnnualForecastCard>
            </div>
            <div className="Monthly-Spendings">
              <MonthlySpendingCard></MonthlySpendingCard>
            </div>
            <div className="Category-Spendings">
              <CategorySpendingCard></CategorySpendingCard>
            </div>
            <div className="Transactions">
              <TransactionsCard></TransactionsCard>
            </div>
            <div className="User-Area">
              <WelcomeUser></WelcomeUser>
            </div>
          </div>
        </InfoContext.Provider>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainContainer;
