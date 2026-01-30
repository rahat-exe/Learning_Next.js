import NotesForm from "@/components/NotesForm";
import connectDb from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  await connectDb();
  return <div className="max-w-4xl mx-auto mt-10">
    <h1 className="text-4xl  text-center font-bold font-mono">Notes App</h1>
    <NotesForm />
  </div>;
}
