import UserList from "@/components/UserList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>Tanstack Query Demo</h1>
      <div>
        <UserList/>
      </div>

    </div>
  );
}
