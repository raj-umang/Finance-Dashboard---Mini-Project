"use client";
import React, { useState } from "react";
import StockPrediction from "../../ui/StockPredictions/StockPredictions";

const Trend = () => {
  const [stockSymbol, setStockSymbol] = useState("GOOG");
  return <StockPrediction stockSymbol={stockSymbol} />;
};

export default Trend;
