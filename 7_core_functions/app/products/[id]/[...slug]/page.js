"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const ProductsIdSlugPage = () => {
    const params = useParams()
  return (
    <div>
      <h1>Product ID: {params.id}</h1>
      <h1>Product Slug: {params.slug.join('/')}</h1>
    </div>
  );
}

export default ProductsIdSlugPage

// useParams are use with client components
