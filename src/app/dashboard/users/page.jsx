import { fetchUsers } from "@/app/lib/data";
import React from "react";

const UsersPage = async () => {
  const users = await fetchUsers();

  console.log(users);
  return <div>page</div>;
};

export default UsersPage;
