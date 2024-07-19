"use client";
import StockPrediction from "@/app/StockPredictions/StockPrediction";
import React, { useState } from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Trend = () => {
  const [stockSymbol, setStockSymbol] = useState("GOOG");

  const handleSymbolChange = (event) => {
    setStockSymbol(event.target.value);
  };

  return (
    <div className="bg-[#182237] p-20 rounded-lg flex gap-5 cursor-pointer w-full mx-2">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <label htmlFor="symbolInput" className="text-3xl">
          Enter Stock Symbol:
        </label>
        <input
          type="text"
          id="symbolInput"
          className="bg-[#182237] text-white border-b-2 border-[#4b5563] focus:outline-none"
          value={stockSymbol}
          onChange={handleSymbolChange}
          placeholder="e.g., GOOG"
        />
        <StockPrediction stockSymbol={stockSymbol} />
      </div>
    </div>
  );
};

export default Trend;
