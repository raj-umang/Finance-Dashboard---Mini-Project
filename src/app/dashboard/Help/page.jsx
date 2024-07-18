import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Help = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return <div className="h-[88vh]">Help</div>;
};

export default Help;
