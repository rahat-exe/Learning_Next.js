import { NextResponse } from "next/server";

export async function GET(request){

    //read cookies from the request
    const theme = request.cookies.get("theme")
    console.log(theme)

    return new Response("Setting cookies",{
        headers:{
            "Set-Cookie":"theme=dart"
        }
    })
}