import React, { useEffect, useState } from 'react';
import NurseItem from './NurseItem';
import { Link } from 'react-router-dom';

export default function Nurse() {
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/nurse')
      .then(response => response.json())
      .then(data => {
        // Sort nurses by experienceYear in descending order (highest first)
        const sortedNurses = data.sort((a, b) => b.experienceYear - a.experienceYear);
        setNurses(sortedNurses);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h1 className="my-4" style={{ color: "#06b4cb" }}>Meet Our Nurse</h1>
      </div>

      <div className="row">
        {nurses.map((nurse) => (
          <div className="col-md-3" key={nurse.id}>
            <Link to={`/nursedetails/${nurse.id}`} state={{ nurse }} style={{ textDecoration: 'none', color: 'inherit' }}>
              <NurseItem
                name={nurse.name}
                education={nurse.education}
                experienceYear={nurse.experienceYear}
                image={nurse.image}
                rating={nurse.rating}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
