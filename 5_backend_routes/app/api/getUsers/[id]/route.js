import { use } from "react"
import { users } from "../route"
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const {id} = await params
    const userId = parseInt(id);

    const user = users.find(u => u.id === userId)

    return NextResponse.json({
        success:"true",
        data:user,
    })
} 