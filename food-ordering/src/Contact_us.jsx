import React, { useState } from 'react';
import './Contact_us.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    altPhone: '',
    flat: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    addressType: 'Home',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Form submitted successfully ✅');
        setFormData({
          name: '',
          phone: '',
          altPhone: '',
          flat: '',
          street: '',
          city: '',
          state: '',
          pincode: '',
          addressType: 'Home',
          notes: '',
        });
      } else {
        alert('Submission failed ❌');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    alert(`Your location:\nLatitude: ${lat}\nLongitude: ${lon}`);
  };

  const showError = () => {
    alert("Location access denied or unavailable.");
  };

  return (
    <div>
      <div className='back-img'>
        <div className="contact-container">
          <h2>Contact & Delivery Info</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label>Full Name :</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <br />
            <label>Mobile Number :</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" />
            <br />
            <label>Alternative Phone :</label>
            <input type="tel" name="altPhone" value={formData.altPhone} onChange={handleChange} pattern="[0-9]{10}" />
            <br />
            <label>Flat / Building :</label>
            <input type="text" name="flat" value={formData.flat} onChange={handleChange} required />
            <br />
            <label>Street / Locality :</label>
            <input type="text" name="street" value={formData.street} onChange={handleChange} required />
            <br />
            <label>City :</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            <br />
            <label>State :</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            <br />
            <label>Pincode :</label>
            <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} pattern="[0-9]{6}" required />
            <br />
            <div className='radio-group'>
              <label>Address Type :</label>
              <br />
              <input
                type="radio"
                name="addressType"
                value="Home"
                checked={formData.addressType === 'Home'}
                onChange={handleChange}
              /> Home
              <br />
              <input
                type="radio"
                name="addressType"
                value="Work"
                checked={formData.addressType === 'Work'}
                onChange={handleChange}
              /> Work
              <br />
              <input
                type="radio"
                name="addressType"
                value="Other"
                checked={formData.addressType === 'Other'}
                onChange={handleChange}
              /> Other
            </div>
            <br />
          
            {/* <button type="button" onClick={getLocation}>Get My Location</button> */}
            <br /><br />
            <button type="submit" className="submit-btn">Save Address</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
