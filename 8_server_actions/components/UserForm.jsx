import { createUser } from "@/actions";
import Image from "next/image";

export default function UserForm() {
  // inline server action
//   const createUser = async (data) => {
//     "use server";
//     const name = data.get("name");
//     const id = data.get("id");

//     console.log(name, " ", id);
//   };
  return (
    <div>
      <form
        action={createUser}
        className="flex flex-col justify-center max-w-4xl mx-auto mt-10"
      >
        <h1>Server Action</h1>
        <input type="number" placeholder="your id" name="id" />
        <input type="text" placeholder="your name" name="name" />

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
