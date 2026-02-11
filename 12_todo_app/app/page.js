import TodoForm from "@/components/TodoForm";
import connectDb from "@/lib/db";

export default async function Home() {
  await connectDb();
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-5 mb-5">
        <header className="text-center mb-5">
          <h1 className="text-4xl">Todo App</h1>
          <p className="text-sm">Created with nextjs, shadcn , tanstack and zustand</p>
        </header>
      </div>

      <main>
        {/* all componennts here */}
        <TodoForm />
      </main>

      {/* <footer>
        <p>Made with next.js</p>
      </footer> */}
    </div>
  );
}
