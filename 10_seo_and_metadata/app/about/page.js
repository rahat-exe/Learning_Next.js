import React from 'react'

// static metadata
export const metadata = {
    title:"About Page",
    description:"Created with next.js",
    openGraph:{
      title:"Our website",
      description:"Created with next.js",
      images:['/file.svg'],
      url:"http://localhost:3000/about"
    }
}

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default AboutPage