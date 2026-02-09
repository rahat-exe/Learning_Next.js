import { NextResponse } from "next/server";
import { email } from "zod";

let users = [
  { id: 1, name: "Rahat", email: "r@test.com" },
  { id: 2, name: "Omor", email: "omor@test.com" },
  { id: 3, name: "Raja", email: "raja@test.com" },
  { id: 4, name: "Ruhul", email: "ruhul@test.com" },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json({
    success: true,
    data: users,
  });
}

export async function POST(request) {
  const body = await request.json();

  const newUser = {
    id: users.length + 1,
    name: body.name,
    email: body.email,
  };

  users.push(newUser);

  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(newUser);
}
