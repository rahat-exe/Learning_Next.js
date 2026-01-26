import React, {use} from 'react'

const Docs = ({params}) => {
  const {slug} = use(params)
  return (
    <div>Docs: {slug.join('/')}</div>
  )
}

export default Docs