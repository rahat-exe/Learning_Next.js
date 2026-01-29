import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request){
    // gettting headers (request header)
    // const requestHeaders = new Headers(request.headers);

    // const authHeader = requestHeaders.get("Authorization");

    // console.log("Auth Header", authHeader)

    // Another way of getting header

    const headerList = await headers()

    const authHeader = headerList.get("Authorization")
    // const customHeader = headerList.get("X-Custom-Header");

    // console.log(customHeader)

    // return NextResponse.json({
    //     success:true,
    //     data:"Hello World from profile"
    // })

    // return new Response("<h1>Profile Api Data</h1",{
    //     headers:{
    //         "Content-Type":"text/html",
    //         "X-Custom-Header":"Next.js Tutorial"
    //     }
    // })

    const response = NextResponse.json({message:"Hello with headers"})

    response.headers.set("X-Custom-header","Next.js")

    return response
}

// Request header = who sent is -> client \ who reads is -> server 
// Response header = who sent is -> server \ who reads is -> client 
