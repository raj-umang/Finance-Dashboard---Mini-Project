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
const Chart = () => {
  const data = [
    {
      name: "Page A",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Page B",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Page C",
      visit: 2000,
      click: 9800,
    },
    {
      name: "Page D",
      visit: 2780,
      click: 3908,
    },
    {
      name: "Page E",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Page F",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Page G",
      visit: 3490,
      click: 4300,
    },
  ];
  return (
    <div className="my-2 h-[450px] bg-[#182237] p-5 rounded-lg">
      <h2 className="font-extralight text-[#b7bac1] mb-5">Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
