import React from 'react';
import './Testimonials.css';
import { NavLink } from 'react-router';

function Testimonial() {
  return (
    <>
        <NavLink to="/Testimonial" ></NavLink> 
   <div className='Testimonial' id='testimonial'>
  <div id='says'>WHAT OUR CUSTOMER SAYS</div>

  <div className="testimonial-container">
    <div className="testimonial-card">
      <div className="testimonial-image">
      <img src="src/Resources/test1.jpg" alt="test1" />
    </div>
      <div className="testimonial-text">
        "Finding nearby restaurants and ordering in just a few taps? This app made my busy evenings so much easier. Delivery is always on time!"
      </div>
      <div className="testimonial-author">— Raj, IT Professional</div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-image">
      <img src="src/Resources/test2.jpg" alt="test2" />
    </div>
      <div className="testimonial-text">
        "I love how personalized the recommendations are. Plus, the loyalty rewards and discounts keep me coming back!"
      </div>
      <div className="testimonial-author">— Sana, College Student</div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-image">
      <img src="src/Resources/test4.jpg" alt="test3" />
    </div>
      <div className="testimonial-text">
        "This food ordering app completely changed the way I order meals! It's fast, super easy to use, and I love how I can track my order in real-time."
      </div>
      <div className="testimonial-author">— A happy customer</div>
    </div>

    <div className="testimonial-card">
      <div className="testimonial-image">
      <img src="src/Resources/test3.jpg" alt="test4" />
    </div>
  <div className="testimonial-text">
    "This service completely exceeded my expectations. From start to finish, the experience was smooth and professional."
  </div>
  <div className="testimonial-author">-Sarah L., Marketing Executive</div>
</div>

<div className="testimonial-card">
  <div className="testimonial-image">
      <img src="src/Resources/test5.jpg" alt="test5" />
    </div>
  <div className="testimonial-text">
    "Absolutely phenomenal! I've never felt more taken care of. Highly recommend to anyone looking for real results."
  </div>
  <div className="testimonial-author">- James R., Business Owner</div>
</div>


<div className="testimonial-card">
  <div className="testimonial-image">
   <img src="src/Resources/test6.jpg" alt="test6" />
  </div>
  <div className="testimonial-text">
    "Checkout was a breeze, and I got real-time updates on my order status. Truly impressive service!"
  </div>
  <div className="testimonial-author">- Priya S., First-Time Buyer</div>
</div>

<div className="testimonial-card">
  <div className="testimonial-image">
    <img src="src/Resources/test7.jpg" alt="test7" />
  </div>
  <div className="testimonial-text">
    "The user interface is super clean and intuitive. I was able to order my lunch in under a minute. Highly recommended!"
  </div>
  <div className="testimonial-author">— Ayesha, Graphic Designer</div>
</div>

<div className="testimonial-card">
  <div className="testimonial-image">
    <img src="src/Resources/test8.jpg" alt="test8" />
  </div>
  <div className="testimonial-text">
    "I love the variety of options available. From local favorites to fancy cuisines, this app has it all!"
  </div>
  <div className="testimonial-author">— Vikram, Food Blogger</div>
</div>


  </div>
</div> 
<div id='hr'><hr/></div>  
    </>
  )
}

export default Testimonial;