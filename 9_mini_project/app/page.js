import { connectDB } from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  await connectDB()
  return (
    <div>
     <h1>Hello World</h1>
    </div>
  );
}
