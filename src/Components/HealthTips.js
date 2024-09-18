import React, { useEffect, useState } from 'react';
import HealthTipsItem from './HealthTipsItem';

export default function HealthTips() {

  const [data, setData] = useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3005/health-tips")
    .then(res => res.json())
    .then(data => {
      // Sort the data based on date, assuming the date is in a format like 'YYYY-MM-DD'
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setData(sortedData);
    })
    .catch(err => console.log(err))
  }, [])


  return (
    <div className="container mt-3">
      <h2 className="text-center mt-4 mb-4" style={{ color: "#06b4cb" }}>Health Tips</h2>
      <div className="row">
        {data.map((tips, index) => (
          <div key={index} className="col-md-3 mb-4">
            <HealthTipsItem
              id={tips.id}
              title={tips.title}
              description={tips.description}
              image={tips.image}
              author={tips.author}
              date={tips.date}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
