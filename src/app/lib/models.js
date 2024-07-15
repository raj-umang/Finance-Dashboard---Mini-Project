const { default: mongoose } = require("mongoose");

const expenseSchema = new mongoose.Schema({  
    transaction_category:{
        type:String,
        required:true
    },
    transaction_title:{
        type:String,
        required:true
    },
},{timestamps:true})

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    user_mail: {
        type: String,
        required: true,
    },
    user_password_hash: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },

}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User",userSchema)
export const Expense = mongoose.models.Transaction || mongoose.model("Transaction",expenseSchema)