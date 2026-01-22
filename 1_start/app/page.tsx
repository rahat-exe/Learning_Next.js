import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-blue-300 font-bold">Hello World!</h1>
      <button>Click me</button>
    </div>
  );
}
