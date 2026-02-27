"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/authClient";
import { Button } from "@base-ui/react";
import { Chrome, Github } from "lucide-react";
import React from "react";

const LoginForm = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL:"/dashboard"
    });
    console.log(data)
  };
  const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
    provider: "github",
    callbackURL:"/dashboard"
    });
}

  return (
    <div className="max-w-3xl mx-auto min-h-screen my-auto">
      <div className="">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button onClick={handleGoogleSignIn}>Continue with google</Button>
              <Button onClick={handleGithubSignIn}>Continue with github</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
