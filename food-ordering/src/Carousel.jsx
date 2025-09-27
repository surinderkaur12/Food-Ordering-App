import React from 'react';

function Carousel() {
  return (
    <>
  
      <div  
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1800" 
      >
        <div className="carousel-inner">   
          <div className="carousel-item active">
            <img
              src="src/Resources/slide1.jpg"
              className="d-block w-100"
              alt="slide1"
              style={{ height: '90vh' }}
            />
           <div className="carousel-caption d-none d-md-block"
             style={{
      position: 'absolute',
      top: 340,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    }}
  >
         
             <h5
                style={{
                  fontSize: '4.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)'
                
                }}
              >
                Welcome to Our Website
              </h5>
              <p
                style={{
                  fontSize: '1.55rem',
                  color: 'yellow',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)'
                }}
              >
               
  Explore our world of innovation, quality, and customer-first service.
              </p>
            </div>
          </div>
        
          <div className="carousel-item">
            <img
              src="src/Resources/slide2.jpg"
              className="d-block w-100"
              alt="slide2"
              style={{ height: '90vh' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="src/Resources/slide3.jpg"
              className="d-block w-100"
              alt="slide3"
              style={{ height: '90vh' }}
            />
            
          </div>
          <div className="carousel-item">
            <img
              src="src/Resources/slide4.jpg"
              className="d-block w-100"
              alt="slide4"
              style={{ height: '90vh' }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
   
    </>
  );
}

export default Carousel;
