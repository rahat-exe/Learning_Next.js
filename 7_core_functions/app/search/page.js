"use client"
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const searchParams = useSearchParams();
    
    const query = searchParams.get('q');
    const category = searchParams.get("category");
    const page = searchParams.get('page');
    
    // difyferent way

    const allParams = Array.from(searchParams.entries())
    console.log(allParams)
  return (
    <div>
      <h1>Search result for {query}</h1>
      <p>category: {category}</p>
      <p>page: {page}</p>
    </div>
  );
}

export default page