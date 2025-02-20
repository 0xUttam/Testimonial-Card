import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = (props) => {
    let reviews = props.reviews;
    let [index, setIndex] = useState(0);

    function leftShiftHandler() {
      if(index - 1 < 0){
        setIndex(reviews.length - 1);
      }
      else{
        setIndex(index - 1);
      }
    }

    function rightShiftHandler() {
      if(index + 1 >= reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index + 1);
      }
    }

    function surpriseHandler() {
      let randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }

  return (
    <div className='card-container'>
      <Card review={reviews[index]}/>

        <div className='icons-container'>
          <button onClick={leftShiftHandler}>
            <FiChevronLeft className='icons'/>
          </button>
          
          <button onClick={rightShiftHandler}>
            <FiChevronRight className='icons'/>
          </button>
        </div>
        
        <div>
          <button onClick={surpriseHandler} className='btn'>
           Surprise Me  
          </button>
        </div>
    </div>
  )
}

export default Testimonials;
