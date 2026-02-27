import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

// Create PostgreSQL adapter using DATABASE_URL from .env
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
// Function to create a new Prisma Client instance
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};

// Extend globalThis type to include prismaGlobal
// This avoids TypeScript errors when attaching prisma to global object
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Use existing prisma instance if available (development),
// otherwise create a new one
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();


// In development mode, store prisma in global object
// This prevents multiple database connections during hot reload
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
export default prisma;

// this prisma client is the bridge between my app and my database...it connect my app to the database and let me do the querys
