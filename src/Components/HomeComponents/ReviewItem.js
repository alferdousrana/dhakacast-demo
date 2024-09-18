import React from 'react';

export default function ReviewItem({ name, image, title, description }) {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-lg-10 col-xl-8">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <img src={image} style={{ objectFit: 'cover', width: '150px', height: '150px' }}
              className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="avatar" width="150" height="150" />
          </div>
          <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
            <h4 className="mb-2">{name}</h4>
            <h6 className="mb-3">{title}</h6>
            <p className="mb-0 pb-3">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
