import Image from "next/image";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/timer");
  const data = await response.json();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Next.js Response(Default)</h1>
      <p>By default latest data from the server</p>
      <p>Time: {data.readable}</p>
      <p>Resquest ID: {data.requestId}</p>
    </div>
  );
}
