import React from 'react'

export const metadata = {
    title:{
        default:"Auth | ourWebsite",
        template:"%s | ourWebsite",
        absolute:""
    },
    description:"Our website"
}

const layout = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout