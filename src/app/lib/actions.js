"use server";

import { sessionOptions, defaultSession } from "../libs";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Dummy username for demonstration
const username = "john";

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

  // Check user in the DB (this should be your actual DB check)
  // const user = await db.getUser({ username: formUsername, password: formPassword });

  if (formUsername !== username) {
    return { error: "Wrong Credentials!" };
  }

  // Example of setting session data
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

// Function to add an expense
export const addExpense = async (formData) => {
  const expenseData = Object.fromEntries(formData);

  // Validate and process expense data
  const { amount, description } = expenseData;

  if (!amount || !description) {
    return { error: "Amount and description are required!" };
  }

  // Add your logic to save the expense to the database here
  // await db.addExpense(expenseData);

  return { success: true, message: "Expense added successfully!" };
};
