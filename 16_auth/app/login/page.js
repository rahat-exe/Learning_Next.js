
import LoginForm from "@/components/Login-Form.jsx";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(session){
    redirect("/")
  }


  return (
    <div className="max-w-3xl mx-auto min-h-screen my-auto">
     <LoginForm />
    </div>
  );
};

export default Login;
