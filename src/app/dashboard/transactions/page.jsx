import Transaction from "@/app/ui/dashboard/transaction_table/history/Transaction";
import React from "react";

const TransactionHistory = () => {
  return (
    <div className="h-[88vh]">
      <h2 className="ml-10">Transaction History</h2>
      <Transaction />
    </div>
  );
};

export default TransactionHistory;
