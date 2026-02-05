import React from 'react'
import { Jockey_One } from 'next/font/google'
import localFont from 'next/font/local'


// const jockeyOne = Jockey_One({
//     weight:["400"],
//     subsets:["latin"]
// })

const font = localFont({
    src:"../../public/fonts/myFont.ttf"
})

const FontExample = () => {
  return (
    <div className='flex flex-col justify-center mt-10 items-center '>
      {/* <h1 className={`${jockeyOne.className} text-3xl `}>Font Example</h1> */}
      <h1 className={`text-5xl ${font.className}`}>Font Example</h1>

      <p>This is an example paragraph</p>
    </div>
  );
}

export default FontExample