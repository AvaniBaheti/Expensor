import React, { useContext } from "react";
import { Transaction } from "./Transaction";
const { GlobalContext } = require("../contexts/GlobalState");

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);

  // console.log(context);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
