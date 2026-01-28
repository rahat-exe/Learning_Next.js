import { NextResponse } from "next/server";
import { users } from "../getUsers/route";

export async function POST(request) {
  try {
    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      return NextResponse.json(
        {
          success: false,
          message: "Name , email and age is required",
        },
        {
          status: 400,
        },
      );
    }

    const emailExists = users.find((user) => user.email === email);
    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          message: "User with this email already exists",
        },
        {
          status: 400,
        },
      );
    }

    const newUser = {
      id: users.length + 1,
      name: name,
      email,
      age,
    };

    users.push(newUser);

    return NextResponse.json({ success: true, data: users, message:"User created successfully"},{status:201})
  } catch (error) {
     return NextResponse.json(
       {
         success: false,
         message: `error: ${error}`,
       },
       {
         status: 400,
       },
     );
  }
}
