import { betterAuth } from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma"
import prisma from "./db";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    Provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
});

// This file:

// Creates your authentication system

// Connects it to Prisma

// Enables email/password login

// Enables Google & GitHub login

// Stores auth data in your PostgreSQL database

// It is the backend auth configuration.