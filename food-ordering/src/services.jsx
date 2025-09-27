import React from 'react';
import './Services.css';

function service() {
  return (
    <>
    <div className='Service'>
  <div className='best-service'>Our Best Services</div>

<div className='service-cards'>
  <div className='cards1'>
     <h2 id='h2'>BEST CHEF</h2>
      <div className='icon-container'> 
        <i className="	fas fa-user-tie fa-2x" style={{ color: 'red' }}></i>
      </div>  
    <div className='service-text'> Our award-winning chefs are masters of culinary art, blending tradition with innovation to deliver unforgettable flavors in every dish.</div>
  </div>


<div className='cards2'>
    <h2 id='h2'>QUALITY FOOD</h2>
  <div className='icon-container'>
    <i className="fas fa-utensils fa-2x" style={{ color: 'green' }}></i>
  </div>
    <div className='service-text'> We prioritize quality by sourcing organic, farm-fresh produce and sustainable meats to ensure every bite is nourishing and delicious.</div>
  </div>


<div className='cards3'>
   <h2 id='h2'>PERFECT COOK</h2>
  <div className='icon-container'>
    <i className="fas fa-user fa-2x" style={{ color: '#FF5722' }}></i></div>
    <div className='service-text'> Every meal is cooked to perfection using precision techniques and the finest ingredients to bring out the best taste and texture.</div>
</div>

</div>
</div>


    </>
  )
}

export default service