import React, { useEffect } from "react";
// import { GlobalContext } from "../src/Context/GlobalState"
import "./App.css";
import { Header } from "../src/components/Header"
import { Balance } from "../src/components/Balance"
import { IncomeExpenses } from "../src/components/IncomeExpenses"
import { TransactionList } from "../src/components/TransactionList"
import { AddTransaction } from "../src/components/AddTransaction"
import ExpenseChart from "../src/components/expenseChart"

import { GlobalProvider } from "../src/Context/GlobalState"
//on load app should pull from localstorage and set value of global provider



function App() {
  // const { transactions } = useContext(GlobalContext);
  useEffect(() => {
    //load from local storage and stick into provider
    const storedHistory = localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : []
    console.log(storedHistory)
  })
  return (
    <GlobalProvider>
      <Header />
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
