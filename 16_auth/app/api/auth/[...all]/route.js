import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);


// This file turns your Better Auth setup into real API routes in Next.js.

// What it does:

// Takes your auth configuration

// Converts it into Next.js API handlers

// Automatically creates /api/auth/* routes



// betterAuth() → authentication engine 🧠

// toNextJsHandler() → adapter that connects engine to Next.js 🚪

// /api/auth/[...all] → gateway route