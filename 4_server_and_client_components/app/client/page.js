"use client"
import React, { useEffect, useState } from 'react'


const ClientPage = () => {
  const [userData, setUserData] = useState(null)
//   console.log(userData)

  async function fetchData(){
    const res = await fetch("https://api.github.com/users/rahat-exe");
    const data = await res.json();
    setUserData(data)
  }

  useEffect(()=>{
    fetchData();
    console.log(userData)
  },[])
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-start">
        <p>Username: {userData?.login}</p>
        <p>name: {userData?.name}</p>
      </div>
    </div>
  );
}

export default ClientPage