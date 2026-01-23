import React, {use} from 'react'

const products = ({params}) => {
  const {id} = use(params)
  return (
    <div>product id: {id}</div>
  )
}

export default products