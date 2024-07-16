import { Expense } from "./models";
import { connectToDb } from "./utils";

export const HomeTransactions = [
    {
        transaction_type: "Income",
        transaction_amount: 3000,
        transaction_category: "Personal",
        transaction_comments: "Salary for July",
        createdAt: "2024-07-01T08:00:00Z",
        updatedAt: "2024-07-01T08:00:00Z"
    },
    {
        transaction_type: "Expenses",
        transaction_amount: 50,
        transaction_category: "Food",
        transaction_comments: "Lunch at restaurant",
        createdAt: "2024-07-02T12:00:00Z",
        updatedAt: "2024-07-02T12:00:00Z"
    },
    {
        transaction_type: "Saving",
        transaction_amount: 500,
        transaction_category: "Personal",
        transaction_comments: "Monthly savings deposit",
        createdAt: "2024-07-03T15:00:00Z",
        updatedAt: "2024-07-03T15:00:00Z"
    }
]

export const HistoryTransactions = [
    {
        transaction_type: "Income",
        transaction_amount: 3000,
        transaction_category: "Personal",
        transaction_comments: "Salary for July",
        createdAt: "2024-07-01T08:00:00Z",
        updatedAt: "2024-07-01T08:00:00Z"
    },
    {
        transaction_type: "Expenses",
        transaction_amount: 50,
        transaction_category: "Food",
        transaction_comments: "Lunch at restaurant",
        createdAt: "2024-07-02T12:00:00Z",
        updatedAt: "2024-07-02T12:00:00Z"
    },
    {
        transaction_type: "Saving",
        transaction_amount: 500,
        transaction_category: "Personal",
        transaction_comments: "Monthly savings deposit",
        createdAt: "2024-07-03T15:00:00Z",
        updatedAt: "2024-07-03T15:00:00Z"
    },
    {
        transaction_type: "Investment",
        transaction_amount: 1500,
        transaction_category: "Personal",
        transaction_comments: "Investment in mutual funds",
        createdAt: "2024-07-04T09:00:00Z",
        updatedAt: "2024-07-04T09:00:00Z"
    },
    {
        transaction_type: "Income",
        transaction_amount: 200,
        transaction_category: "Expenses",
        transaction_comments: "Freelance project payment",
        createdAt: "2024-07-05T10:00:00Z",
        updatedAt: "2024-07-05T10:00:00Z"
    },
    {
        transaction_type: "Expenses",
        transaction_amount: 30,
        transaction_category: "Travel",
        transaction_comments: "Taxi fare",
        createdAt: "2024-07-06T14:00:00Z",
        updatedAt: "2024-07-06T14:00:00Z"
    },
    {
        transaction_type: "Saving",
        transaction_amount: 100,
        transaction_category: "Expenses",
        transaction_comments: "Emergency fund",
        createdAt: "2024-07-07T11:00:00Z",
        updatedAt: "2024-07-07T11:00:00Z"
    },
    {
        transaction_type: "Investment",
        transaction_amount: 800,
        transaction_category: "Personal",
        transaction_comments: "Stock market investment",
        createdAt: "2024-07-08T13:00:00Z",
        updatedAt: "2024-07-08T13:00:00Z"
    },
    {
        transaction_type: "Income",
        transaction_amount: 4000,
        transaction_category: "Travel",
        transaction_comments: "Bonus for completing project",
        createdAt: "2024-07-09T16:00:00Z",
        updatedAt: "2024-07-09T16:00:00Z"
    },
    {
        transaction_type: "Expenses",
        transaction_amount: 20,
        transaction_category: "Food",
        transaction_comments: "Groceries",
        createdAt: "2024-07-10T17:00:00Z",
        updatedAt: "2024-07-10T17:00:00Z"
    },
    {
        transaction_type: "Saving",
        transaction_amount: 200,
        transaction_category: "Travel",
        transaction_comments: "Travel savings",
        createdAt: "2024-07-11T18:00:00Z",
        updatedAt: "2024-07-11T18:00:00Z"
    },
    {
        transaction_type: "Investment",
        transaction_amount: 1000,
        transaction_category: "Expenses",
        transaction_comments: "Real estate investment",
        createdAt: "2024-07-12T19:00:00Z",
        updatedAt: "2024-07-12T19:00:00Z"
    }, {
        transaction_type: "Income",
        transaction_amount: 3000,
        transaction_category: "Personal",
        transaction_comments: "Salary for July",
        createdAt: "2024-07-01T08:00:00Z",
        updatedAt: "2024-07-01T08:00:00Z"
    },
    {
        transaction_type: "Expenses",
        transaction_amount: 50,
        transaction_category: "Food",
        transaction_comments: "Lunch at restaurant",
        createdAt: "2024-07-02T12:00:00Z",
        updatedAt: "2024-07-02T12:00:00Z"
    },
    {
        transaction_type: "Saving",
        transaction_amount: 500,
        transaction_category: "Personal",
        transaction_comments: "Monthly savings deposit",
        createdAt: "2024-07-03T15:00:00Z",
        updatedAt: "2024-07-03T15:00:00Z"
    },
    {
        transaction_type: "Investment",
        transaction_amount: 1500,
        transaction_category: "Personal",
        transaction_comments: "Investment in mutual funds",
        createdAt: "2024-07-04T09:00:00Z",
        updatedAt: "2024-07-04T09:00:00Z"
    },
    {
        transaction_type: "Income",
        transaction_amount: 200,
        transaction_category: "Expenses",
        transaction_comments: "Freelance project payment",
        createdAt: "2024-07-05T10:00:00Z",
        updatedAt: "2024-07-05T10:00:00Z"
    },
    {
        transaction_type: "Expenses",
        transaction_amount: 30,
        transaction_category: "Travel",
        transaction_comments: "Taxi fare",
        createdAt: "2024-07-06T14:00:00Z",
        updatedAt: "2024-07-06T14:00:00Z"
    },
    {
        transaction_type: "Saving",
        transaction_amount: 100,
        transaction_category: "Expenses",
        transaction_comments: "Emergency fund",
        createdAt: "2024-07-07T11:00:00Z",
        updatedAt: "2024-07-07T11:00:00Z"
    },
    {
        transaction_type: "Investment",
        transaction_amount: 800,
        transaction_category: "Personal",
        transaction_comments: "Stock market investment",
        createdAt: "2024-07-08T13:00:00Z",
        updatedAt: "2024-07-08T13:00:00Z"
    },
    {
        transaction_type: "Income",
        transaction_amount: 4000,
        transaction_category: "Travel",
        transaction_comments: "Bonus for completing project",
        createdAt: "2024-07-09T16:00:00Z",
        updatedAt: "2024-07-09T16:00:00Z"
    },
    {
        transaction_type: "Expenses",
        transaction_amount: 20,
        transaction_category: "Food",
        transaction_comments: "Groceries",
        createdAt: "2024-07-10T17:00:00Z",
        updatedAt: "2024-07-10T17:00:00Z"
    },
    {
        transaction_type: "Saving",
        transaction_amount: 200,
        transaction_category: "Travel",
        transaction_comments: "Travel savings",
        createdAt: "2024-07-11T18:00:00Z",
        updatedAt: "2024-07-11T18:00:00Z"
    },
    {
        transaction_type: "Investment",
        transaction_amount: 1000,
        transaction_category: "Expenses",
        transaction_comments: "Real estate investment",
        createdAt: "2024-07-12T19:00:00Z",
        updatedAt: "2024-07-12T19:00:00Z"
    },

]

export const fetchTransactions = async () => {
    try {
        connectToDb();
        const transactions = await Expense.find();
        return transactions;
    } catch (error) {
        throw new Error("failed to fetch transaction")
    }
}
