import React, {use} from 'react'

const Product = ({params}) => {
  const {id} = use(params)
  return (
    <div>
    
      <h1 className='text-white'>Product: {id}</h1>
      <p>hdbbjcdbh dd njdj ncdcd</p>
    </div>
  );
}

export default Product