import { FaMoneyBill } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoAddCircleSharp, IoSettingsSharp } from "react-icons/io5";
import { RiDashboard2Fill } from "react-icons/ri";
import { BsSendArrowDownFill } from "react-icons/bs";
import { LuHistory } from "react-icons/lu";

export const navLinks = [
  {
    href: "/dashboard/home",
    icon: RiDashboard2Fill,
    label: "Dashboard",
    comingSoon: false,
  },
  {
    href: "/dashboard/incomes",
    icon: FaMoneyBill,
    label: "Incomes",
    comingSoon: false,
  },
  {
    href: "/dashboard/expenses",
    icon: BsSendArrowDownFill,
    label: "Expenses",
    comingSoon: false,
  },
  {
    href: "/dashboard/create",
    icon: IoAddCircleSharp,
    label: "Create",
    comingSoon: false,
  },
];

export const accountLinks = [
  {
    href: "/dashboard/history",
    icon: LuHistory,
    label: "History",
    comingSoon: false,
  },
  {
    href: "/dashboard/automatize",
    icon: FaWandMagicSparkles,
    label: "Automatize",
    comingSoon: true,
  },
  {
    href: "/dashboard/settings",
    icon: IoSettingsSharp,
    label: "Settings",
    comingSoon: true,
  },
];

export const entryTypes = [
  {
    label: "Income",
    value: "income",
    color: "#5a8c49",
  },
  {
    label: "Expense",
    value: "expense",
    color: "#db3d3d",
  },
  {
    label: "Saving",
    value: "saving",
    color: "#2d7feb",
  },
  {
    label: "Investment",
    value: "investment",
    color: "#ccab33",
  },
];
