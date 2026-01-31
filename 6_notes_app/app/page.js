import NotesForm from "@/components/NotesForm";
import connectDb from "@/lib/db";
import note from "@/models/note";
import Image from "next/image";

async function getNotes(){
  await connectDb()
  const notes = await note.find({}).sort({createdAt:-1}).lean()

  return notes.map((note)=>({
    ...note,
    _id:note._id.toString()
  }))
}
export default async function Home() {
  let notes = await getNotes()
  console.log(notes)
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-4xl  text-center font-bold font-mono">Notes App</h1>
      <NotesForm notes={notes} />
    </div>
  );
}
