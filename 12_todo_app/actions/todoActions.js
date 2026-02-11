"use server";

import { revalidatePath } from "next/cache";
import connectDb from "@/lib/db";
import Todo from "@/models/todo";
import { todoSchema } from "@/validations/todoValidation";

export async function createTodo(data) {
  try {
    const validatedData = todoSchema.parse(data);

    await connectDb();

    const todo = await Todo.create(validatedData);

    revalidatePath("/");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(todo)),
    };
  } catch (error) {
    console.error("error:", error);
    return {
      success: false,
      error: error ? error.message : "Failed to create Todo",
    };
  }
 
}

export async function getTodos(){
  try {
    await connectDb()
    const todos = await Todo.find({}).sort({createdAt:-1}).lean()

    return {
      success:true,
      data:JSON.parse(JSON.stringify(todos))
    }
  } catch (error) {
    console.error("error:",error)
    return{
      success:false,
      error:error.message || "Something went wrong"
    }
  }
}

 /*
  Why use JSON.parse(JSON.stringify(data)) ?

Step 1:
Database libraries (like Mongoose) return complex objects that contain
hidden properties, methods, and prototype metadata.

Example:
const todo = await Todo.create({ title: "Study" });

This "todo" is NOT a plain object. It includes internal functions like:

* save()
* validate()
* getters/setters

Step 2:
Server Actions can only return serializable data (plain objects, arrays,
strings, numbers, etc.). Returning a complex object may cause errors like:
"Only plain objects can be returned from Server Actions".

Step 3:
JSON.stringify(data)
→ Converts the object into a pure JSON string.
→ Removes methods and hidden metadata.

Step 4:
JSON.parse(...)
→ Converts that JSON string back into a plain JavaScript object.

Result:
Robot-like database object ➜ Simple transferable object

This ensures the data can safely travel from the server to the client
without serialization issues.
*/