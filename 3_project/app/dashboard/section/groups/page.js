import Link from 'next/link'
import React from 'react'

const Groups = () => {
  return (
    <div>
        <h1>Gruops Page</h1>
        <Link href={'/settings'}>Go to settings</Link>
    </div>
  )
}

export default Groups