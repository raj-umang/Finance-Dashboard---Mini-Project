import { IoAddCircleSharp } from "react-icons/io5";
import { RiDashboard2Fill } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";

export const navLinks = [
  {
    href: "/dashboard/home",
    icon: RiDashboard2Fill,
    label: "Dashboard",
  },
  {
    href: "/dashboard/create",
    icon: IoAddCircleSharp,
    label: "Create",
  },
  {
    href: "/dashboard/transactions",
    icon: LuHistory,
    label: "Transactions",
  },
];

export const entries = [
  {
    label: "Income",
    value: "income",
  },
  {
    label: "Expense",
    value: "expense",
  },
  {
    label: "Saving",
    value: "saving",
  },
  {
    label: "Investment",
    value: "investment",
  },
];

export const entryTypes = {
  income: "#5a8c49",
  expense: "#db3d3d",
  saving: "#2d7feb",
  investment: "#ccab33"
};

export const category = [
  {
    label: "Food",
    value: "Food",
    color: "orange"
  },
  {
    label: "Rent",
    value: "rent",
    color: "yellow"
  },
  {
    label: "Travel",
    value: "travel",
    color: "gray"
  },
  {
    label: "Recreation",
    value: "expense",
    color: "red"
  }
]
