import Transaction from "@/app/ui/dashboard/transaction_table/history/Transaction";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const TransactionHistory = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="h-[88vh]">
      <h2 className="ml-10">Transaction History</h2>
      <Transaction />
    </div>
  );
};

export default TransactionHistory;
