import React from "react";
import Transaction from "../ui/dashboard/transaction_table/home/transaction";
import Chart from "../ui/dashboard/chart/chart";
import Card from "../ui/dashboard/card/Card";

const Dashboard = () => {
  return (
    <div className="flex gap-5">
      <div className="basis-3 flex flex-col g-5">
        <div className='flex g-5 justify-between my-2'>
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
