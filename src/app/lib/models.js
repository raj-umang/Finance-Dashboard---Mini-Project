import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Expense =
  mongoose.models.Transaction || mongoose.model("Transaction", expenseSchema);
