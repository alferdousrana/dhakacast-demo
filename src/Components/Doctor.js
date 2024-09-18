import React, { useEffect, useState } from 'react';
import DoctorItem from './DoctorItem';
import { Link } from 'react-router-dom';


export default function Doctor() {
  const [data, setData] = useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3005/doctors")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h1 className="my-4" style={{ color: "#06b4cb" }}>Meet Our Specialized Doctors</h1>
      </div>

      <div className="row">
        {data.map((doctor) => (
          <div className="col-md-3" key={doctor.id}>
            <Link to={`/doctordetails/${doctor.id}`} state={{ doctor }} style={{ textDecoration: 'none', color: 'inherit' }}>
              <DoctorItem
                name={doctor.name}
                degree={doctor.degree}
                specialization={doctor.specialization}
                image={doctor.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
