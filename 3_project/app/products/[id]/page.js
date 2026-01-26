import React, {use} from 'react'

const Product = ({params}) => {
  const {id} = use(params)
  return (
    <div>
      <h1 className='text-white'>Product: {id}</h1>
    </div>
  );
}

export default Product