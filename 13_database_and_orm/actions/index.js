"use server";

import { prisma } from "@/libs/db.js";

export const seed = async () => {
  await prisma.post.createMany({
    data: [{ title: "Hello prisma" }, { title: "Hello user" }],
  });
};
