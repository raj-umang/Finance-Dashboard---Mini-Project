import Transaction from "@/app/ui/dashboard/transaction_table/history/Transaction";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { fetchTransactions } from "@/app/lib/data";

const TransactionHistory = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
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
