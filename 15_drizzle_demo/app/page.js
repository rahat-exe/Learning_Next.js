import { createUser, getAllUsers } from "@/actions";
import UserList from "@/components/UserList";
import Image from "next/image";

export default async function Home() {
  const users = await getAllUsers();
  console.log(users)
  return (
    <div className="max-w-3xl mx-auto p-4 mt-10 space-y-5">
      <h1 className="text-3xl font-bold font-mono">Drizzle setup demo</h1>
      <div>
        <form action={createUser}>
          <input name="name" placeholder="Enter your name" />
          <input name="email" placeholder="Enter your email" />
          <input name="age" placeholder="Enter your age" />
          <button type="submit">Add</button>
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
