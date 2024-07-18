import { User } from "../../lib/models";
import connect from "../../lib/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  console.log("Register endpoint hit");
  const { username, email, password } = await request.json();
  console.log("Email:", email, "Password:", password);

  await connect();

  if (!username || !email || !password) {
    return new NextResponse("All fields are required", { status: 400 });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    const newUser = new User({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });
    await newUser.save();
    return new NextResponse("User is registered", { status: 201 });
  } catch (err) {
    console.error("Error saving user:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
