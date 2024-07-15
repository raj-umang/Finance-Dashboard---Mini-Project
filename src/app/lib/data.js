import { Expense, User } from "./models"
import { connectToDb } from "./utils";

export const fetchUsers = async () =>{
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error("Failed to fetch new users")
    }
}

export const fetchTransactions = async ()=>{
    try {
        connectToDb();
        const transactions = await Expense.find();
        return Expense;
    } catch (error) {
        throw new Error("failed to fetch transaction")
    }
}