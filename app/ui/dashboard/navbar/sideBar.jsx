import React from "react";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdAttachMoney,
  MdAnalytics,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdControlPoint,
} from "react-icons/md";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Add Transaction",
        path: "/dashboard/create",
        icon: <MdControlPoint />,
      },
      {
        title: "History",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Trends",
        path: "/dashboard/trend",
        icon: <MdAnalytics />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/Help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div >
      <div >
        <Image
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div >
          <span>John Doe</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title} className="">
            <span className="styles.cat">{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
