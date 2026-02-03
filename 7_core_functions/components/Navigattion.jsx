'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
const Navigattion = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <>
    <div>Navigattion</div>
    <h1>{pathname}</h1>
    </>
  )
}

export default Navigattion

// usePathname() is used in client