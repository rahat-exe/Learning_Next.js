import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
});

// createAuthClient() creates the authentication bridge between your React app and your auth backend.

// We can do
// authClient.signIn.email(...)
// authClient.signUp.email(...)
// authClient.useSession()

// baseURL: "http://localhost:3000"; 
// “My backend auth server is running here.”