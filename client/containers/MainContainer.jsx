import React, { useState, useEffect, useContext, createContext } from "react";
import "../stylesheets/styles.scss";
import Header from "../comps/Header.jsx";
import Footer from "../components/Footer.jsx";
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
    categorySum: 0,
    allSum: 0,
    incomeArray: [],
    // to change later - placeholder data for design
    // loggedIn: true,
    // avatar:
    //   "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/39.jpg",
    // user_name: "Kevin49",
    // accounts: [],
    // transactions: [],
    // categories: [
    //   {
    //     cat_name: "Bills & Utilities",
    //     sum: "$1,009.16",
    //   },
    //   {
    //     cat_name: "Entertainment",
    //     sum: "$1,098.79",
    //   },
    //   {
    //     cat_name: "Shopping",
    //     sum: "$2,756.69",
    //   },
    //   {
    //     cat_name: "Health & Wellness",
    //     sum: "$983.13",
    //   },
    //   {
    //     cat_name: "Transportation",
    //     sum: "$2,868.66",
    //   },
    //   {
    //     cat_name: "Education",
    //     sum: "$5,858.07",
    //   },
    // ],
    // categorySum: "$14,574.50",
  });

  useEffect(() => {
    if (userInfo.loggedIn) {
      console.log(userInfo);
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
