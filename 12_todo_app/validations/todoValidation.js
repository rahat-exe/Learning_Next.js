import { z } from "zod";

export const todoSchema = z.object({
    title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title should be under 100 characters")
    .trim(),
    description: z
    .string()
    .max(500, "Description should be under 500 characters")
    .optional(),
    priority: z.enum("low", "medium", "high").default("medium"),
});


// This is for client side validation