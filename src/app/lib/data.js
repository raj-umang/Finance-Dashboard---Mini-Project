import { User } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch new users");
  }
};
