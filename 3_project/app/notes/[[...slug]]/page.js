import React, {use} from 'react'

const Notes = ({params}) => {
  const {slug} = use(params)
  return (
    <div>Notes: {slug.join('/')}</div>
  )
}

export default Notes