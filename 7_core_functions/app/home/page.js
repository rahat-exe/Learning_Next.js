"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const HomePage = () => {
    const router = useRouter()
    const handleGoBack = () => {
        router.back()
    }
    const handleGoForword = () => {
        router.forward()
    }
    const handleClick = () => {
      router.push('/search');
    };
    const refresh = () => {
        router.refresh()
    }
  return (
    <div className="flex flex-col">
      <div>HomePage</div>
      <button onClick={handleClick}>Go search</button>
      <button onClick={refresh}>Refresh</button>

      <button onClick={handleGoBack}>Go Back</button>
      <button onClick={handleGoForword}>Go forward</button>
    </div>
  );
}

export default HomePage