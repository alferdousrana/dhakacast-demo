import React from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function ActivitiesItem({ id, title, description, image, author, date }) {

  const navigate = useNavigate(); // Initialize the navigation hook

   // Handle "Read More" click and navigate to ItemDetails page with the activity ID
   const handleReadMore = () => {
    navigate(`/item-details/${id}`, {
      state: { title, description, image, author, date } // Pass data via state
    });
  };


  return (
    <div className="my-3">
      <div className="card" style={{ width: '18rem' }}>
        <img src={image || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"} className="card-img-top" height={"200"} style={{ objectFit: "cover" }} alt="Activity" />
        <div className="card-body">
          <h5 className="card-title" style={styles.title}>{title}</h5>
          <p className="card-text" style={styles.description}>{description}</p>
          <button onClick={handleReadMore} style={styles.button} className="btn btn-sm">Read More</button>
          <div className="d-flex justify-content-between mt-2">
            <span className="text-muted small">{author} &nbsp; | &nbsp; Date: {date}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline styles to control the text overflow and line limits
const styles = {
  title: {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    FontWeight: 'bold',
    lineHeight: '1.5'
    
  },
  description: {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '1.5'
  },
  button: {
    backgroundColor: '#06b4cb', // Button background color
    color: 'white', // Button text color
  }
};
