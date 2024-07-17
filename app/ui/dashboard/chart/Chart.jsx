"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const Chart = (props) => {
  return (
    <div className="my-2 h-[450px] bg-[#182237] p-5 rounded-lg">
      <h2 className="font-extralight text-2xl text-[#b7bac1] mb-5">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="transaction_date" />
          <YAxis dataKey="transaction_amount"/>
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="transaction_amount"
            stroke="red"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
