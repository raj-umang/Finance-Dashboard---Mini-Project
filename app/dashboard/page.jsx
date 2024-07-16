import React from "react";
import Card from "../ui/dashboard/card/card";
import Transaction from "../ui/dashboard/transaction_table/home/transaction";
import Chart from "../ui/dashboard/chart/chart";

const Dashboard = () => {
  return (
    <div>
      <div >
        <div >
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
