import { createUser, getAllUsers } from "@/actions";
import UserList from "@/components/UserList";
import Image from "next/image";

export default async function Home() {
  const users = await getAllUsers();
  // console.log(users)
  return (
    <div className="max-w-3xl mx-auto p-4 mt-10 space-y-5">
      <h1 className="text-3xl font-bold font-mono text-center">Drizzle setup demo</h1>
      <div>
        <form action={createUser} className="p-2 flex flex-col justify-center gap-3">
          <input name="name" placeholder="Enter your name" className="px-4 border border-gray-700 rounded-xl py-2"/>
          <input name="email" placeholder="Enter your email" className="px-4 border border-gray-700 rounded-xl py-2"/>
          <input name="age" placeholder="Enter your age" className="px-4 border border-gray-700 rounded-xl py-2"/>
          <button type="submit" className="border border-gray-700 w-1/2 px-4 py-1 rounded-xl mx-auto hover:border-2">Add</button>
        </form>
      </div>

      <div>
        {users.map((user)=>(
          <UserList key={user.id} user={user}/>
        ))}
      </div>
    </div>
  );
}
