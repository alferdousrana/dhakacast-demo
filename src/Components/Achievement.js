import React, { useEffect, useState }  from 'react';
import AchievementItem from './AchievementItem';

export default function Achievement() {
  const [data, setData] = useState([]);
  useEffect( ()=>{
    fetch("http://localhost:3005/achievement")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

   // Scroll to the top when the component mounts
   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array means it runs only on mount


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ color: '#06b4cb', fontFamily: 'Roboto' }}>OUR ACHIEVEMENTS</h2>
      <hr style={{ border: '1px solid #06b4cb', width: '300px', margin: '0 auto' }} />
      <div className="row mt-4">
        {data.map((achievement, index) => (
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
    </div>
  );
}
