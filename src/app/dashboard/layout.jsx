"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Footer from "../ui/dashboard/footer/footer";
import "../globals.css";
import styles from "../ui/dashboard/dashboard.module.css";
import Sidebar from "../ui/dashboard/navbar/sideBar";
import Navbar from "../ui/dashboard/top-navbar/navbar";
const Layout = ({ children }) => {
  const { data: session } = useSession();
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar
          username={session?.user?.username || "Guest"}
          email={session?.user?.email || "No Email"}
        />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
