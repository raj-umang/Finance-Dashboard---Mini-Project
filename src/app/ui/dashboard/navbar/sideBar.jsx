import React from "react";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdAttachMoney,
  MdAnalytics,
  MdOutlineSettings,
  MdHelpCenter,
  MdControlPoint,
} from "react-icons/md";
import Image from "next/image";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();

  let displayName = "Guest";

  if (session?.user?.email) {
    const emailParts = session.user.email.split("@");
    displayName = emailParts[0];
  }

  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src="/finance.jpg"
          alt=""
          width="50"
          height="50"
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium">{displayName}</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-[#b7bac1] font-bold text-sm my-[10px]">
              {cat.title}
            </span>
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
