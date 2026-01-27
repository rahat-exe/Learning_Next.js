import { Walter_Turncoat } from "next/font/google";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/rahat-exe");
  const data = await res.json();
  console.log(data);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-start">
        <p>Username: {data.login}</p>
        <p>name: {data.name}</p>
      </div>
    </div>
  );
}
