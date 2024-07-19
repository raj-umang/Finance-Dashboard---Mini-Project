import Transaction from "@/app/ui/dashboard/transaction_table/history/Transaction";
import React from "react";
import Session from "../../../../components/Session";
import { fetchTransactions } from "@/app/lib/data";

const TransactionHistory = async () => {
  <Session />;
  const HistoryTransactions = await fetchTransactions();

  return (
    <div className="h-[88vh]">
      <h2 className="ml-10">Transaction History</h2>
      <Transaction
        HistoryTransactions={JSON.parse(JSON.stringify(HistoryTransactions))}
      />
    </div>
  );
};

export default TransactionHistory;
