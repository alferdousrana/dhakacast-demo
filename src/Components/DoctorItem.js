import React from 'react';
import './Main.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function DoctorItem({ name, degree, specialization, image }) {
  return (
    <div className="card text-center  mb-5">
      <img
        src={image}
        className="card-img-top rounded-circle"
        alt={name}
        style={{ width: '150px', height: '150px', margin: '10px auto' }}
      />
      <div className="card-body">
        <h5 className="card-title text-style-doctorItem" style={{ fontSize: '20px', overflowWrap: 'break-word',  wordWrap: 'break-word', maxWidth: '100%' }}>
          {name.length > 20 ? (
            <>
              {name.substring(0, 20)+"..."}
            </>
          ) : name}
        </h5>
        <p className="card-text text-info text-style-doctorItem" style={{fontSize: '14px', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden' }}>
        {degree.length > 32 ? (
            <>
              {degree.substring(0, 32)+"..."}
            </>
          ) : degree}
        </p>
        <p className="text-muted text-style-doctorItem" style={{fontSize: '14px', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden' }}>
          {specialization}
        </p>
      </div>
    </div>
  );
}
