import React, { useState, useEffect } from 'react';
import './Home.css'; 
import ReviewItem from './ReviewItem'; // Import the ReviewItem component

export default function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch reviews
    const fetchReviews = async () => {
      fetch("http://localhost:3005/review")
      .then(res => res.json())
      .then(reviews => setReviews(reviews))
      .catch(err => console.log(err))

    };

    fetchReviews();
  }, []);

  return (
    <section className="gradient-custom mt-5">
      <div className="row d-flex justify-content-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2/2997.png" 
             className='mt-5' 
             style={{width: '70px', height: '50px', filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(270deg) brightness(100%) contrast(100%)', rotate: '180deg'}}  
             alt="icon" />
      </div>
      
      <div className="container my-1 py-1">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <div className="text-center mb-4 pb-2">
              <i className="fas fa-quote-left fa-3x text-white"></i>
            </div>

            <div className="card">
              <div className="card-body px-4 py-5">
                <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-bs-ride="carousel" data-bs-interval="3000">
                  
                  {/* Carousel Inner */}
                  <div className="carousel-inner pb-3">
                    {reviews.length === 0 ? (
                      <div className="carousel-item active">
                        <div className="text-center">Loading reviews...</div>
                      </div>
                    ) : (
                      reviews.map((review, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={review.id}>
                          <ReviewItem 
                            name={review.name}
                            image={review.image}
                            title={review.title}
                            description={review.description}
                          />
                        </div>
                      ))
                    )}
                  </div>

                  {/* Carousel Indicators */}
                  <div className="carousel-indicators mb-0">
                    {reviews.map((_, index) => (
                      <button 
                        key={index} 
                        type="button" 
                        data-bs-target="#carouselDarkVariant" 
                        data-bs-slide-to={index} 
                        className={index === 0 ? 'active' : ''} 
                        aria-current={index === 0 ? 'true' : 'false'} 
                        aria-label={`Slide ${index + 1}`}>
                      </button>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            <div className="text-center mt-4 pt-2">
              <i className="fas fa-quote-right fa-3x text-white"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2/2997.png" 
          className="mb-4" 
          style={{width: '70px', height: '50px', filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(270deg) brightness(100%) contrast(100%)'}} 
          alt="icon" 
        />
      </div>
    </section>
  );
}
