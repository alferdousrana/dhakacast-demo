import React, { useEffect, useState }  from 'react';
import AchievementItem from '../AchievementItem';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css'; // Import custom CSS

export default function Achievement() {
  const [data, setData] = useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3005/achievement")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

 // Sort activities by published date (newest first)
 const sortedAchivement = data.sort((a, b) => new Date(b.date) - new Date(a.date));

 // Get the latest 4 activities
 const latestAchivement = sortedAchivement.slice(0, 4);

  return (
    <div className="wave-background">
      <div className="overlayAchievement"></div> {/* Transparent overlay */}
      <div className="container achivement-container mt-1">
        <h2 className="text-center mb-2 mt-3" style={{ color: 'white', fontFamily: 'Roboto' }}>OUR ACHIEVEMENTS</h2>
        <hr style={{ border: '2px solid #ffffff', width: '350px', margin: '0 auto' }} />
        <div className="row mt-5">
          {latestAchivement.map((achievement, index) => (
            <div key={index} className="col-md-3 mb-4">
              <AchievementItem
                id={achievement.id}
                title={achievement.title}
                description={achievement.description}
                author={achievement.author}
                date={achievement.date}
                image={achievement.image}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="./Achievement" className="btn btn-info" style={styles.button}>
            Learn More <FaArrowRight style={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: '#fff', // Button background color
    color: '#06b4cb', // Button text color
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
