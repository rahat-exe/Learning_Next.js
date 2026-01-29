import { NextResponse } from "next/server";

export const users = [
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
    
  // Querry Parameters
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const age = searchParams.get("age");

    let filteredUsers = users;

    if(age){
      filteredUsers = filteredUsers.filter((user)=>user.age === Number(age))
    }
    if(name){
      filteredUsers = filteredUsers.filter((user)=> user.name.toLowerCase().includes(name.toLowerCase()))
    }

    return NextResponse.json({
        success:"true",
        data:filteredUsers,
        total:filteredUsers.length
    })
} 