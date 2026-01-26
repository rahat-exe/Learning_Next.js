import Link from 'next/link'
import React from 'react'

const Section = () => {
  return (
    <div>
        <h1>Section page</h1>
        <Link href={'/settings'}>Go to settings</Link>
    </div>
  )
}

export default Section