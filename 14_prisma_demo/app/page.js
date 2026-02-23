import { createPost, getPosts, seed } from "../actions/index";
import prisma from "../libs/db";

export default async function Home() {
  
  // const posts = await prisma.post.findMany();
  // console.log(posts)
  const posts = []

  const fetchPost = await getPosts()
  if(fetchPost.success){
    posts.push(...fetchPost.data)
  }
  return (
    <div className="max-w-3xl mx-auto space-y-3.5">
      <h1 className="font-mono text-2xl text-center mt-5 ">
        Prisma setup with next.js
      </h1>
      <div className="max-w-2xl mx-auto mt-10">
        <form
          action={createPost}
          className="flex flex-col justify-center items-center gap-2 w-full"
        >
          <input
            name="title"
            required
            placeholder="for title"
            className="w-full border border-gray-100 rounded-2xl p-3"
          />
          <input
            name="description"
            placeholder="for description"
            className="w-full border border-gray-100 rounded-2xl p-3"
          />
          <button
            className="w-1/2 border border-gray-100 rounded-2xl p-3 hover:bg-gray-600 text-gray-100"
            type="submit"
          >
            Create
          </button>
        </form>
        <div>
          <h1 className="font-mono text-2xl text-center mt-5 ">Posts</h1>
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-3 border border-gray-100 rounded-2xl mb-2"
            >
              <p className="text-gray-100 text-xl">{post.title}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-100 text-sm">
                  {post.description ? post.description : "No description"}
                </p>
                <p className="text-gray-100 text-sm">
                  {new Date(post.createdAT).toLocaleString()}
                </p>
              </div>
              <p className="text-gray-100 text-sm"></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
