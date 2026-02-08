import React from 'react'

// to generate dynamic metadata
export const generateMetadata = async ({params}) =>{
    const {slug} =  params;
    const imageUrl = `http://localhost:3000/api/og?title=${encodeURIComponent(`Blog ${slug}`)}&description=${encodeURIComponent(`Welcome to our website`)}`
    return {
        title:`Blog ${slug}`,
        description:"Welcome to our website",
        openGraph:{
          title:`Blog ${slug}`,
          description:"Welcome to our website",
          images:[{
            url:imageUrl,
            width: 800,
            height: 600,
            alt:"Og Image alt"
          }],
          url:`http://localhost/blog/${slug}`
        }
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