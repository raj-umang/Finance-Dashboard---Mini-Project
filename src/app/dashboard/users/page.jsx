import { fetchUsers } from "@/app/lib/data";
import React from "react";

const page = () => {
  const users = fetchUsers()
  return <div>page</div>;
};

export default page;
