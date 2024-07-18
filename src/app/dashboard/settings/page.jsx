import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Settings = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return <div className="h-[88vh]">Settings</div>;
};

export default Settings;
