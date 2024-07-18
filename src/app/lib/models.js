import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    transaction_type: {
      type: String,
      required: true,
    },
    transaction_amount: {
      type: Number,
      required: true,
      min: 0
    },
    transaction_category: {
      type: String,
      required: true,
    },
    transaction_comments: {
      type: String,
      required: true,
    },
    transaction_date:{
      type:Date,
      required:true
    }
  },
  { timestamps: true }
);


export const Expense = mongoose.models.Transaction || mongoose.model("Transaction", expenseSchema);
