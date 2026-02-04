"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    const handleClick = () =>{
        router.push('/home')
    }
    const handleClickReplace = () => {
        router.replace('/home')
    }
  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={handleClick}>click to login(push)</button>
      <button onClick={handleClickReplace}>click to login(replace)</button>

      {/* <Link href={'/home'}>click to login</Link> */}
    </div>
  );
}

export default page