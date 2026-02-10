"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function QueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {children}
    </QueryClientProvider>
  );
}


// Client-side provider that creates a single QueryClient instance and wraps the app with QueryClientProvider so all components can access React Query for server-state management. The QueryClient is stored in useState to ensure it is initialized only once, preventing cache resets and unnecessary re-fetching during re-renders.


// we are bsically creating a provider with tanstack and wrap the root so that every page and components can access the server state management