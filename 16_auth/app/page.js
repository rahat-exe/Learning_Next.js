import HomeView from "@/components/Home";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if(!session){
    redirect("/login")
  }
  return (
    <div>
      <h1>Home page</h1>
      <HomeView />
    </div>
  );
}
