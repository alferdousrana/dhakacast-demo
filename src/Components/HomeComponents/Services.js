import React from 'react';
import { FaUserMd, FaUserNurse, FaVials, FaUtensils, FaHeartbeat, FaCloud } from 'react-icons/fa';
import './Home.css';// Import custom CSS

export default function Services() {
  const services = [
    {
      icon: <FaUserMd size={50} />,
      title: '24/7 specialist doctor consultancy both online and offline',
      buttonLabel: 'Schedule Appointment',
      buttonLink: '../Doctor',
    },
    {
      icon: <FaUserNurse size={50} />,
      title: 'Nurse, caregiver, physiotherapy service at home',
      buttonLabel: 'Schedule Appointment',
      buttonLink: '../Nurse',
    },
    {
      icon: <FaUtensils size={50} />,
      title: 'Diabetic medication and food home delivery',
      buttonLabel: 'Order Now',
      buttonLink: '../Shop',
    },
    {
      icon: <FaVials size={50} />,
      title: 'Diagnostic and lab support',
      buttonLabel: 'Give Sample',
      buttonLink: '/',
    },
    {
      icon: <FaHeartbeat size={50} />,
      title: 'Dietician and nutritionist service',
      buttonLabel: 'Service Upcoming',
      buttonLink: '/',
    },
    {
      icon: <FaCloud size={50} />,
      title: 'Cloud-based continuous glucose monitoring',
      buttonLabel: 'Service Upcoming',
      buttonLink: '/',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: '#06b4cb', fontFamily: 'Roboto' }}>OUR SERVICES</h2>
      <hr style={{ border: '1px solid #06b4cb', width: '700px', margin: '0 auto' }} />
      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm text-center p-3" style={{ borderRadius: '20px' }}>
              <div className="card-body">
                <div className="mb-3" style={{ color: '#06b4cb' }}>{service.icon}</div>
                <p className="card-text" style={{fontFamily: 'Roboto'}} >{service.title}</p>
                <a href={service.buttonLink} className="btn service-button text-white mt-3" style={{backgroundColor: '#06b4cb',fontFamily: 'Roboto' }}>
                  {service.buttonLabel} 
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
