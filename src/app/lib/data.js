import { revalidatePath } from "next/cache";
import { Expense } from "./models";
import connect from "./utils";
import { redirect } from "next/navigation";

export const getInvestment = async () => {
  "use server";
  try {
    const all_items = await fetchTransactions();
    const only_expenses = all_items.filter(
      (item) => item.transaction_type === "investment"
    );
    return only_expenses;
  } catch (error) {
    throw new Error(error);
  }
};

export const getIncome = async () => {
  "use server";
  try {
    const all_items = await fetchTransactions();
    const only_expenses = all_items.filter(
      (item) => item.transaction_type === "income"
    );
    return only_expenses;
  } catch (error) {
    throw new Error(error);
  }
};

export const getExpenses = async () => {
  "use server";
  try {
    const all_items = await fetchTransactions();
    const only_expenses = all_items.filter(
      (item) => item.transaction_type === "expense"
    );
    return only_expenses;
  } catch (error) {
    throw new Error(error);
  }
};

export const addExpense = async (formData) => {
  "use server";
  const { type, date, amount, category, comment } =
    Object.fromEntries(formData);
  let redirection = false;
  try {
    connect();
    // console.log(type, date, amount, category, comment, formData)
    const record = new Expense({
      transaction_type: type,
      transaction_amount: amount,
      transaction_category: category,
      transaction_comments: comment,
      transaction_date: date,
    });
    const done = await record.save();
    if (done) {
      revalidatePath("/dashboard");
      revalidatePath("/dashboard/transactions");
      redirection = true;
    } else return -1;
  } catch (error) {
    throw new Error(error);
  }
  if (redirection) {
    redirect("/dashboard");
  }
};

export const fetchTransactions = async () => {
  "use server";
  try {
    connect();
    const transactions = await Expense.find();
    return transactions;
  } catch (error) {
    throw new Error("failed to fetch transaction");
  }
};
