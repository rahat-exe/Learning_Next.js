"use server";

import { db } from "../src/index.js";
import { usersTable } from "../src/db/schema.js";
import { revalidatePath } from "next/cache";
import { success } from "zod";
import { eq } from "drizzle-orm";

export async function createUser(formData) {
  const name = formData.get("name");
  const age = formData.get("age");
  const email = formData.get("email");

  const user = await db.insert(usersTable).values({
    name,
    age,
    email,
  }).returning();

  revalidatePath("/");
  console.log(user)

  return {
    success: true,
    data:user,
    message: "User create successfully",
  };
}

export async function getAllUsers() {
  const users = await db.select().from(usersTable)

  return users || []
}

export async function getUsersById(id) {
    const user = await db.select().from(usersTable).where(eq(usersTable.id, id))

    return user
}

export async function updateUser(id, formData) {
    const name = formData.get("name");
    const age = formData.get("age");
    const email = formData.get("email");

    const update = await db.update(usersTable).set({name, age, email}).where(eq(usersTable.id, id))

    revalidatePath("/");

    return {
        success:true
    }
}

export async function deleteUser(id) {
    const deleteUserById = await db.delete(usersTable).where(eq(usersTable.id, id))

    revalidatePath("/");

    return deleteUserById
}