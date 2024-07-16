<<<<<<< HEAD
export const addExpense = async (fromData)=>{
    const {} = Object.fromEntries(FormData)
}
=======
"use server";

import { sessionOptions, defaultSession } from "../libs";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "john";

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const login = async (prevState, formData) => {
  const session = await getSession();

  const formUsername = formData.get("username");
  const formPassword = formData.get("password");

  // CHECK USER IN THE DB
  // const user = await db.getUser({username,password})

  if (formUsername !== username) {
    return { error: "Wrong Credentials!" };
  }

  session.userId = "1";
  session.username = formUsername;
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};
>>>>>>> e347822 (auth updated)
