import React, { useEffect, useState } from 'react';
import ActivitiesItem from './ActivitiesItem';

export default function AllActivities() {
  const [data, setData] = useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3005/activities")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

   // Scroll to the top when the component mounts
   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array means it runs only on mount


  return (
    <div className="container mt-3">
      <h2 className="text-center mt-4 mb-4" style={{ color: "#06b4cb" }}>ALL NEWS AND ACTIVITIES</h2>
      <div className="row">
        {data.map((activity, index) => (
          <div key={index} className="col-md-3 mb-4">
            <ActivitiesItem
              id={activity.id}
              title={activity.title}
              description={activity.description}
              image={activity.image}
              author={activity.author}
              date={activity.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
