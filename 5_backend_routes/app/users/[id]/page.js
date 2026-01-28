import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default async function Home({params}) {
    const {id} = await params
    const userId = parseInt(id)
  const res = await fetch(`http://localhost:3000/api/getUsers/${userId}`);
  const data = await res.json();
  console.log(data);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>{data.data.name}</p>
      <p>{data.data.age}</p>
      <p>{data.data.email}</p>
    </div>
  );
}
