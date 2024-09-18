import React, { useEffect, useState } from 'react';
import ActivitiesItem from '../ActivitiesItem';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

export default function Activities() {
  const [data, setData] = useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3005/activities")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  // Sort activities by published date (newest first)
  const sortedActivities = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get the latest 4 activities
  const latestActivities = sortedActivities.slice(0, 4);

  return (
    <div className="actevities-section pt-1 ps-5 pe-5  mt-4 mb-3">
      <h2 className="text-center mt-5 mb-2 " style={{ color: "#06b4cb", fontFamily: "Roboto"}}>RECENT NEWS AND ACTIVITIES</h2>
      <div className="row mt-5 me-5 offset-md-1">
        {latestActivities.map((activity, index) => (
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
      {/* Learn More button to navigate to the Activities page */}
      <div className="text-center mt-2 mb-2">
        <Link to="/all-activities" className="btn" style={styles.button}>
          Learn More <FaArrowRight style={styles.icon}/>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  button: {
    fontFamily: 'Roboto', // Font family for the button
    backgroundColor: '#06b4cb', // Button background color
    color: '#fff', // Button text color
    border: 'none', // Remove border
    padding: '10px 20px', // Padding for the button
    borderRadius: '5px', // Rounded corners
    cursor: 'pointer', // Pointer cursor on hover
    alignItems: 'center', // Align icon with text
  },
  icon: {
    marginLeft: '10px', // Space between text and arrow icon
  },
}