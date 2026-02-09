import AddUser from "@/components/AddUser";
import UserList from "@/components/UserList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>Tanstack Query Demo</h1>
      <div className="grid grid-cols-2 gap-2">
        <UserList />
        <AddUser />
      </div>

    </div>
  );
}
