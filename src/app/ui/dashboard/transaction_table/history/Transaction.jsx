"use client";
import React from "react";
import { entryTypes } from "@/app/constants/data";
const Transaction = ({ HistoryTransactions }) => {
  return (
    <table className="flex flex-col w-full  mx-auto h-5/6 mt-8 bg-[#151C2C] border-2 border-[#182237] rounded-md">
      <thead className="flex">
        <tr className="basis-full items-center flex bg-[#182237] h-[3rem]">
          <th className="basis-1/5">Date</th>
          <th className="basis-1/5">Type</th>
          <th className="basis-1/5">Category</th>
          <th className="basis-2/5">Comment</th>
          <th className="basis-1/5">Amount</th>
        </tr>
      </thead>
      <tbody className="flex flex-col w-full mt-4 custom-scrollbar overflow-y-scroll">
        {HistoryTransactions.map((items, index) => (
          <tr key={index} className="flex w-full my-4 items-center my-2">
            <td className="basis-1/5 text-center">
              {new Date(items.transaction_date).toLocaleDateString()}
            </td>
            <td
              className="basis-1/5 text-center ml-5"
              style={{
                backgroundColor: `${entryTypes[items.transaction_type]}`,
                borderRadius: "8px",
              }}
            >
              {items.transaction_type}
            </td>
            <td className="basis-1/5 text-center">
              {items.transaction_category}
            </td>
            <td className="basis-2/5 text-center">
              {items.transaction_comments}
            </td>
            <td className="basis-1/5 text-center">
              {items.transaction_amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transaction;
