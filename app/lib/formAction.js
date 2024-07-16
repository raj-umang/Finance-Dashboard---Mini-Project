import { connectToDb } from "./utils"

export const addExpense=async(formData)=>{
    "use server"
    const {type,date,amount,category,comment}=Object.fromEntries(formData);
    try {
        // connectToDb()
        // const res = await
        console.log(type,date,amount,category,comment,formData)
    } catch (error) {
        throw new Error(error)
    }
}