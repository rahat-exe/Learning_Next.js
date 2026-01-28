import Image from "next/image";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/response");
  const data = await res.json()
  console.log(data)
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {data.data.map((item)=>(
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
