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
      min: 0,
    },
    transaction_category: {
      type: String,
      required: true,
    },
    transaction_comments: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Expense =
  mongoose.models.Transaction || mongoose.model("Transaction", expenseSchema);
