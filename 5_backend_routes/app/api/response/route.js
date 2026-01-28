import { NextResponse } from "next/server";

let users = [
  {
    id: 1,
    name: "Rahat",
    email: "rahat@test.com",
    age: 24,
  },
  {
    id: 2,
    name: "Raja",
    email: "raja@test.com",
    age: 23,
  },
  {
    id: 3,
    name: "Ruhul",
    email: "ruhul@test.com",
    age: 25,
  },
];
export async function GET(request){
    return NextResponse.json({
        success:"true",
        data:users,
        total:users.length
    })
} 