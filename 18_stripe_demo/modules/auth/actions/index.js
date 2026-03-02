"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { headers } from "next/headers";

export const getCurrentDbUser = async () => {
  const user = await auth.api.getSession({
    headers: await headers(),
  });

  const dbuser = await db.collection("users").findOne({ id: user?.user?.id });

  return dbuser;
};
