import React, {use} from 'react'

const Reviews = ({params}) => {
  const {id, reviewId} = use(params)

  return (
    <div>
      <h1>Product id : {id}</h1>
      <h1>Review id : {reviewId}</h1>
    </div>
  );
}

export default Reviews