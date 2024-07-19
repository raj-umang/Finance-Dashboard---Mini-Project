import React from "react";
import Transaction from "../ui/dashboard/transaction_table/home/transaction";
import Chart from "../ui/dashboard/chart/chart";
import Card from "../ui/dashboard/card/Card";
import { getExpenses, getIncome, getInvestment } from "../lib/data";
import PieChartComponent from "../ui/dashboard/chart/Pie";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  const expenses = await getExpenses();
  const income = await getIncome();
  const investment = await getInvestment();
  const expense_summary = expenses.reduce(
    (total, item) => item.transaction_amount + total,
    0
  );
  const income_summary = income.reduce(
    (total, item) => item.transaction_amount + total,
    0
  );
  const investment_summary = investment.reduce(
    (total, item) => item.transaction_amount + total,
    0
  );
  // console.log(expense_summary)
  return (
    <div className="flex gap-5">
      <div className="basis-full flex flex-col g-5">
        <div className="flex g-5 justify-between my-2">
          <Card data={expense_summary} type={"expense"} title={"Expenses"} />
          <Card data={income_summary} type={"income"} title={"Income"} />
          <Card
            data={investment_summary}
            type={"investment"}
            title={"Investment"}
          />
          <PieChartComponent
            expenses={expense_summary}
            investment={investment_summary}
            income={income_summary}
          />
        </div>
        <Transaction />
        <Chart data={JSON.parse(JSON.stringify(expenses))} />
      </div>
    </div>
  );
};

export default Dashboard;
