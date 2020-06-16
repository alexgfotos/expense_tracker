import React from "react";
import "./App.css";
import { Header } from "../src/components/Header"
import { Balance } from "../src/components/Balance"
import { IncomeExpenses } from "../src/components/IncomeExpenses"
import { TransactionList } from "../src/components/TransactionList"
import { AddTransaction } from "../src/components/AddTransaction"
import ExpenseChart from "../src/components/expenseChart"

import { GlobalProvider } from "../src/Context/GlobalState"

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance />
        <ExpenseChart />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
