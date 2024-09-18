import React from 'react';
import { useNavigate } from 'react-router-dom'; 

export default function AchievementItem({id, image, title, description, author, date }) {

  const navigate = useNavigate(); // Initialize the navigation hook

   // Handle "Read More" click and navigate to ItemDetails page with the activity ID
   const handleReadMore = () => {
    navigate(`/item-details/${id}`, {
      state: { title, description, image, author, date } // Pass data via state
    });
  };


  return (
    <div className="card h-100">
      <img
        src={image || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
        className="card-img-top"
        style={{ height: '180px' }}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title" style={styles.title}>{title}</h5> {/* Max 2 lines for title */}
        <p className="card-text" style={styles.description}>{description}</p> {/* Max 2 lines for description */}
        <button onClick={handleReadMore} style={styles.button} className="btn btn-sm">Read More</button>
      </div>
      <div className="card-footer">
        <small className="text-muted" style={styles.footerText}>By: {author} &nbsp; | &nbsp; Date: {date}</small> {/* Change footer text size */}
      </div>
    </div>
  );
}

const styles = {
  title: {
    fontSize: '20px', // Title font size
    fontWeight: 'bold', // Optional: make the title bold
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2, // Limit to 2 lines
    textOverflow: 'ellipsis', // Add ellipsis (...) if text exceeds 2 lines
  },
  description: {
    fontSize: '14px', // Description font size
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    WebkitLineClamp: 2, // Limit to 2 lines
    textOverflow: 'ellipsis', // Add ellipsis (...) if text exceeds 2 lines
  },
  button: {
    backgroundColor: '#06b4cb', // Button background color
    color: 'white', // Button text color
  },
  footerText: {
    fontSize: '10px', // Footer text size
    color: '#6c757d', // Footer text color
  }
};
