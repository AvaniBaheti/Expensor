import React from "react";
import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionsList } from "./components/TransactionsList";
import { GlobalProvider } from "./contexts/GlobalState";
const { Header } = require("./components/Header");
const { Balance } = require("./components/Balance");

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionsList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
