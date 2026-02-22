import { seed } from "@/actions";
import Image from "next/image";

export default async function Home() {
  await seed()
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
