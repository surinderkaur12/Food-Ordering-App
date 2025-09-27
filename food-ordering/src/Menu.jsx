import React from 'react';
import './Menu.css';
import { Link } from 'react-router';

function Menu() {
  return (
    <>
    
<div className='menu1' id='menu'>
  <div className='menu-text'>Our Offered Menu</div>
  <div className='menu-text1'>Some Trendy And Popular Courses Offered</div>
  
  <div className='menu-table'>
    <div className='menu-items'>
       <Link to="/breakfast" className='BREAKFAST'>BREAKFAST</Link>
      <Link to="/lunch" className='LUNCH'>LUNCH</Link>
      <Link to="/dinner" className='DINNER'>DINNER</Link>
      <Link to="/desserts" className='DESSERTS'>DESSERTS</Link>
    </div>
  </div>          
</div>
<br/>
    
    </>
  )
}

export default Menu