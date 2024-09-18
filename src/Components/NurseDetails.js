import React from 'react';
import { useParams, useLocation } from 'react-router-dom';


export default function NurseDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const nurse = state?.nurse; // Access passed nurse data

  if (!nurse) {
    return <div>nurse not found</div>;
  }

  return (
    <div className="container mt-5 mb-5">
        <div className="row text-center mb-5">
        <h2 className="my-4" style={{ color: "#06b4cb" }}>Nurse Details Information</h2>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={nurse.image}
            alt={nurse.name}
            className="img"
            style={{ width: '250px', height: '300px' }}
          />
        </div>
        <div className="col-md-4 pe-5">
          <h3 style={{ fontFamily: 'Roboto' }}>{nurse.name}</h3>
          <p className='text-style-nurse'><strong>Education:</strong> {nurse.education}</p>
          <p className='text-style-nurse'><strong>Work Place:</strong> {nurse.workplace}</p>
          <p className='text-style-nurse'><strong>Searvice Charge:</strong> {nurse.fee} Tk Per Day</p>
          <p className='text-style-nurse'><strong>Rating:</strong> {nurse.rating} Out of 5</p>
          <p className='text-style-nurse'><strong>Specialization:</strong> {nurse.specialization}</p>
          <p className='text-style-nurse'><strong>Years of Experience:</strong> {nurse.experienceYear} years</p>
        </div>
        <div className="col-md-4 pe-5">
          <p className='text-style-nurse'><strong>About:</strong> {nurse.aboutNurse}</p>
          
        </div>
        
      </div>
      <div className="row mt-5 py-3">
      <button className="btn mt-5 mb-3 position-absolute bottom-0 start-50 translate-middle-x" style={{ width: '100%',  fontWeight: 'bold', color: 'white', background: '#06b4cb' }}>Book Appointment</button>  
      </div>
      
    </div>
  );
}
