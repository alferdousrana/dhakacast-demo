import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Import hooks

export default function ItemDetails() {
  // const { id } = useParams(); // Get the activity ID from the URL
  const location = useLocation(); // Get the data passed via state

  const { title, description, image, author, date } = location.state; // Destructure the state

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array means it runs only on mount

  return (
    <div style={styles.container}>
      <div className="item-image">
        <img src={image} alt={title} style={styles.image} />
      </div>
      <div className="item-info" style={styles.info}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <div className="item-meta" style={styles.meta}>
          <p style={styles.metaItem}>
            <strong>Author:</strong> {author}
          </p>
          <p style={styles.metaItem}>
            <strong>Date:</strong> {new Date(date).toLocaleDateString()} | {new Date(date).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
}

// In-page styles
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    margin: '40px',
    paddingTop: '40px',
    paddingRight: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    borderRadius: '8px',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    
  },
  description: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '10px',
    textAlign: 'justify',
  },
  meta: {
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#555',
  },
  metaItem: {
    margin: '5px 0',
  },
};
