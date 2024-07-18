"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/dashboard/footer/footer";
import "../globals.css";
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
