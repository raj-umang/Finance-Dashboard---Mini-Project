"use server";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Session = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
};

export default Session;
