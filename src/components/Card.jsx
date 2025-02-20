import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {
  let review = props.review;
  
    return (
    <div className='card'>
      <div className='card-img'> 
        <img src={review.image} className='img'/>
        <div className='circle'></div>
      </div>

      <div className='name-container'>
        <p className='name'>{review.name}</p>
      </div>

      <div className='job-container'>
        <p className='job'>{review.job}</p>
      </div>

      <div className='quotes'>
        <FaQuoteLeft />
      </div>

      <div className='desc'>
        {review.text}
      </div>

      <div className='quotes'>
        <FaQuoteRight />
      </div>

    </div>
  )
}

export default Card
