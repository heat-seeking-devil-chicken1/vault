import React, { useState, useEffect, Component } from "react";
import "../stylesheets/styles.scss";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { CategorySpendingCard } from "../comps/CategorySpendingCard.jsx";
import { MonthlySpendingCard } from "../comps/MonthlySpendingCard.jsx";
import { WelcomeUser } from "../comps/WelcomeUser.jsx";
import { TransactionsCard } from "../comps/TransasctionsCard.jsx";
import { CashflowCard } from "../comps/CashflowCard.jsx";
import { AnnualForecastCard } from "../comps/AnnualForecastCard.jsx";
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: 1,
      transactions: [],
      categories: [],
      balance: [],
      sumArray: [],
      monthlyIncome: 5000,
      // synced: false,
    };
    // this.updateSynced = this.updateSynced.bind(this);
  }

  componentDidMount() {
    // make call to our endpoint and populate
    fetch("/transactions/all/" + this.state.loggedInUser)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...this.state,
          categories: data.categories,
          sum: data.sum,
        });
      });
  }

  render() {
    return (
      <>
        <div className="grid-container">
          <Header />
          <div id="container">
            <div class="Cash-Flow">
              <CashflowCard></CashflowCard>
            </div>
            <div class="Annual-Forecast">
              <AnnualForecastCard></AnnualForecastCard>
            </div>
            <div class="Monthly-Spendings">
              <MonthlySpendingCard></MonthlySpendingCard>
            </div>
            <div class="Category-Spendings">
              <CategorySpendingCard></CategorySpendingCard>
            </div>
            <div class="Transactions">
              <TransactionsCard></TransactionsCard>
            </div>
            <div class="User-Area">
              <WelcomeUser></WelcomeUser>
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default MainContainer;
