import React, { useState, useEffect, Component } from "react";
import "../stylesheets/styles.scss";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import OverviewHeaderCard from "../components/OverviewHeaderCard.jsx";
import MonthlyIncomeCard from "../components/MonthlyIncomeCard.jsx";
import MonthlyExpenseCard from "../components/MonthlyExpenseCard.jsx";
import CashFlowCard from "../components/CashFlowCard.jsx";
import ForecastCard from "../components/ForecastCard.jsx";
import AssetsCard from "../components/AssetsCard.jsx";
import BudgetCard from "../components/BudgetCard.jsx";
import BalanceCard from "../components/BalanceCard.jsx";
import TrendChartCard from "../components/TrendChartCard.jsx";
import TransactionsCard from "../components/TransactionsCard.jsx";

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
          <div className="stats-container">
            <div className="stats-header">
              <OverviewHeaderCard />
            </div>
            <div className="stats-overview">
              <MonthlyIncomeCard monthlyIncome={this.state.monthlyIncome} />
              <MonthlyExpenseCard savings={this.state.sumArray} />
              <CashFlowCard
                savings={this.state.sumArray}
                monthlyIncome={this.state.monthlyIncome}
              />
              <ForecastCard />
            </div>
            <div className="stats-accounts">
              <AssetsCard />
              <BudgetCard />
              <BalanceCard balanceArray={this.state.balance} />
              <TrendChartCard />
              <TransactionsCard transactions={this.state.transactions} />
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
