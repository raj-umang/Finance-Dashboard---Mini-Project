import { Expense } from "./models";
import { connectToDb } from "./utils"

export const addExpense = async (formData) => {
    "use server"
    const { type, date, amount, category, comment } = Object.fromEntries(formData);
    try {
        connectToDb()
        console.log(type, date, amount, category, comment, formData)
        const record = new Expense({
            transaction_type: type,
            transaction_amount: amount,
            transaction_category: category,
            transaction_comments: comment,
            transaction_date: date
        })
        const done = await record.save()
        if(done) return 0;
        else return -1;
    } catch (error) {
        throw new Error(error)
    }
}