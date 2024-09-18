import React from 'react';
import {useLocation } from 'react-router-dom';
import './Main.css'


export default function DoctorDetails() {
  
  const { state } = useLocation();
  const doctor = state?.doctor; // Access passed doctor data

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="container mt-5 mb-5">
        <div className="row text-center mb-5">
        <h2 style={{ color: "#06b4cb" }}>Doctors Details Information</h2>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="img"
            style={{ width: '300px', height: '350px' }}
          />
        </div>
        <div className="col-md-4 pe-5">
          <h3 style={{ fontFamily: 'Roboto' }}>{doctor.name}</h3>
          <p className='text-style-doctor'><strong>Degree:</strong> {doctor.degree}</p>
          <p className='text-style-doctor'><strong>Designation:</strong> {doctor.designation}</p>
          <p className='text-style-doctor'><strong>Hospital:</strong> {doctor.hospital}</p>
          <p className='text-style-doctor'><strong>Consultation Fee (New Patient):</strong> {doctor.fee} Tk</p>
          <p className='text-style-doctor'><strong>Follow-up Fee:</strong> {doctor.followUpFee} Tk</p>
          <p className='text-style-doctor'><strong>Specialization:</strong> {doctor.specialization}</p>
          <p className='text-style-doctor'><strong>Years of Experience:</strong> {doctor.experienceYear} years</p>
        </div>
        <div className="col-md-4 pe-5">
          <p className='text-style-doctor'><strong>About:</strong> {doctor.aboutDoctor}</p>
          
        </div>
        
      </div>
      <div className="row mt-5 py-3">
      <button className="btn mt-5 mb-3 position-absolute bottom-0 start-50 translate-middle-x" style={{ width: '100%',  fontWeight: 'bold', color: 'white', background: '#06b4cb' }}>Book Appointment</button>  
      </div>
      
    </div>
  );
}
