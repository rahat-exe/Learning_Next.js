import connectDb from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  await connectDb();
  return <div className="container mx-auto mt-10">
    <h1 className="text-4xl  text-center font-bold font-mono">Notes App</h1>
  </div>;
}
