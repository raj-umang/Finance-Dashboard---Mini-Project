"use client";
import React, { useState } from "react";
import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import Transaction from "../ui/dashboard/transaction/transaction";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Chart from "../ui/dashboard/chart/chart";
import StockPrediction from "../StockPredictions/StockPrediction";
import "../globals.css";

const Dashboard = () => {
  const [stockSymbol, setStockSymbol] = useState("GC=F");

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
        <StockPrediction stockSymbol={stockSymbol} />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
