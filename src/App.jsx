import React from 'react'
import reviews from './data';
import Testimonials from './components/Testimonials';
const App = () => {

  return (
    <div className='container'>
      <div className='contenet'>
        <h1 className='heading'>Our Testimonials</h1>
        <div className='underline'></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
};

export default App;
