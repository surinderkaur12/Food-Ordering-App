// src/components/Footer.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [subscriber, setSubscriber] = useState('');
  const [message, setMessage] = useState('');
  const [testimonial, setTestimonial] = useState("testimonial");
  const [blog, setBlog] = useState("blog");
  const [about, setAbout] = useState('about');


  const handleSubscribe = async () => {
    if (!subscriber) {
      setMessage('Please enter your name or email.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { subscriber });

      if (response.data.success) {
        setMessage('✅ Subscribed successfully!');
        setSubscriber('');
      } else {
        setMessage('❌ Subscription failed.');
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Server error. Try again later.');
    }
  };

  return (
    <footer>
      <div className='foot'>
        <div className='footer'>

          <div className='menu'>
            <span id='span'> 📞 call:+01 1234567890</span>
            <h2>QUICK LINKS</h2>
            <ul>
              <li><Link to="/Breakfast">Breakfast</Link></li>
              <li><Link to="/Lunch">Lunch</Link></li>
              <li><Link to="/Dinner">Dinner</Link></li>
              <li><Link to="/Desserts">Desserts</Link></li>
              <li><a href='#about' onClick={()=> setAbout('about')} className={about === 'about' ? "active" : ""}>About_Us</a></li>
              <li><a href="#testimonial" onClick={() => setTestimonial("testimonial")} className={testimonial === "testimonial" ? "active" : ""}>Testimonial</a></li>
              <li><a href="#blog" onClick={() => setBlog("blog")} className={blog === "blog" ? "active" : ""}> Blogs</a></li>
              <li><Link to="/contact_us">Contact us</Link></li>
            </ul>
          </div>

          <div className='feeds'>
            <span id='span'> 📩 Email: food@gmail.com</span>
            <h2>INSTAGRAM FEEDS</h2>
            <div className='img-feed'>
              <img id='feed' src='src/Resources/feed1.jpg' alt="feed1" />
              <img id='feed' src='src/Resources/feed2.jpg' alt="feed2" />
              <img id='feed' src='src/Resources/feed3.jpg' alt="feed3" />
              <img id='feed' src='src/Resources/feed4.jpg' alt="feed4" />
              <img id='feed' src='src/Resources/feed5.jpg' alt="feed5" />
              <img id='feed' src='src/Resources/feed6.jpg' alt="feed6" />
            </div>
          </div>

          <div className="newsletter">
            <span id='span'>📍 Location</span>
            <h2>SIGN UP TO THE NEWSLETTER</h2>
            <div className="letter">
              <input
                type="text"
                name="subscriber"
                placeholder="Enter Your Name or Email"
                value={subscriber}
                onChange={(e) => setSubscriber(e.target.value)}
              /><br />
              <button id="btn" onClick={handleSubscribe}>Subscribe</button>
              {message && <div style={{ color: 'white', marginTop: '10px' }}>{message}</div>}
            </div>

            <div className='social'>
              <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook" style={{ color: 'blue' }}></i>
              </a>
              <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram" style={{ color: '#e016aa' }}></i>
              </a>
              <a href="https://whatsapp.com" className="whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp" style={{ color: '#4dff0d' }}></i>
              </a>
              <a href="https://linkedin.com" className="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin" style={{ color: 'blue' }}></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
