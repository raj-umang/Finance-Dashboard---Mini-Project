"use client";
import StockPrediction from "@/app/StockPredictions/StockPrediction";
import React, { useState } from "react";

const Trend = () => {
  const [stockSymbol, setStockSymbol] = useState("GC=F");
  return <StockPrediction stockSymbol={stockSymbol} />;
};

export default Trend;
