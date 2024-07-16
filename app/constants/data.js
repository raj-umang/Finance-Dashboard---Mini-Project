import { IoAddCircleSharp, IoSettingsSharp } from "react-icons/io5";
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

export const accountLinks = [
  {
    href: "/dashboard/settings",
    icon: IoSettingsSharp,
    label: "Settings",
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

export const category = [
    {
        label:"Food",
        value:"Food",
        color:"orange"
    },
    {
        label:"Rent",
        value:"rent",
        color:"yellow"
    },
    {
        label:"Travel",
        value:"travel",
        color:"gray"
    },
    {
        label:"Recreation",
        value:"expense",
        color:"red"
    }
]
