import React from 'react'

// to generate dynamic metadata
export const generateMetadata = async ({params}) =>{
    const {slug} = await params;
    return {
        title:`Blog ${slug}`
    }
}

const Blog = async ({params}) => {
    const {slug} = await params
  return (
    <div>
      <h2>Blog Page {slug}</h2>
    </div>
  );
}

export default Blog