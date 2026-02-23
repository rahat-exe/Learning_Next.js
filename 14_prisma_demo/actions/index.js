"use server";

import { revalidatePath } from "next/cache.js";
import  prisma  from "../libs/db.ts";

export const seed = async () => {
  await prisma.post.createMany({
    data: [{ title: "Hello prisma" }, { title: "Hello user" }],
  });
};

export const createPost = async (formData) => {
  const title = formData.get("title")
  const description = formData.get("description");

  try {
    const create = await prisma.post.create({
      data:{
        title:title,
        description:description
      }
    })

    revalidatePath("/")

    return {
      success: true,
      data:createPost
    }
  } catch (error) {
    console.log(error);
    return {
      success:false,
      error:error.message
    }
  }

}

export const getPosts = async () => {
  
  try {
    const posts = await prisma.post.findMany()
     
    return {
      success: true,
      data: posts,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: error.message,
    };
  }
};
