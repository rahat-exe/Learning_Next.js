import React from 'react'
import Image from 'next/image'
const ImageExample = () => {
  return (
    <div>
        <Image 
            src={"/favicon.ico"}
            alt={"Icon"}
            height={200}
            width={200}
        />
    </div>
  )
}

export default ImageExample