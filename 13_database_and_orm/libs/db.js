import {PrismaClient} from '@prisma/client'

// export const db = new PrismaClient();

const globalForPrisma = globalThis //globalThis is the global object that persists across module reloads in Node.js. Unlike a regular variable, things stored here survive hot reloads.

export const prisma = globalForPrisma.prisma || new PrismaClient() //"If a Prisma instance already exists on the global object, reuse it. If not, create a new one." This ensures only one connection is ever made, no matter how many times the module reloads.

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma //This saves the instance to globalThis so it can be reused on the next hot reload — but only in development. In production, you don't need this because the server starts once and modules don't hot-reload. Keeping globals clean in production is just good practice.



// export const db = new PrismaClient();
// This is the naive approach — it works, but it's problematic in Next.js. Every time Next.js hot-reloads during development, this file re-runs and creates a brand new database connection. Do this enough times and you'll exhaust your connection pool and get errors.


// First load → globalForPrisma.prisma is undefined → creates new PrismaClient() → stores it on globalThis
// Hot reload → globalForPrisma.prisma already exists → reuses it → no new connection made
// Production → runs once, no hot reload, global storage skipped entirely