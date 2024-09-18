import React, { useEffect, useState } from 'react';
import './Home.css';

export default function HeaderSlider() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/featured")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {data.length === 0 ? (
            <div className="carousel-item active">
              <p>Loading...</p>
            </div>
          ) : (
            data.map((item, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                <img src={item.image} className="d-block w-100" alt={item.description} />
              </div>
            ))
          )}
        </div>

        {/* Optional Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
