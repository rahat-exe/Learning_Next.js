import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  //read cookies from the request
  //   const theme = request.cookies.get("theme");
  //   console.log(theme);

  const cookieStore = await cookies();

  const myCookies = cookieStore.get("theme");
  // console.log(myCookies)

  const score = cookieStore.get("score");
  console.log(score);

  cookieStore.set("score", "100");

  //   return new Response("Setting cookies", {
  //     headers: {
  //       "Set-Cookie": "theme=dark",
  //     },
  //   });

  return NextResponse.json({ message: "cookies set!" });
}

// Cookies are small key–value data stored by the browser and automatically sent to the server with every request.
