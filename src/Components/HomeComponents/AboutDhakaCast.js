import React from 'react';
import award from '../Image/award.jpg';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

export default function AboutDhakaCast() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5 ms-5">
          {/* Content for the first column */}
          <h2 style={styles.title} className='mb-5'>ABOUT DHAKACAST</h2>
          <p style={styles.description}>
            Dhaka Cast is a healthcare start-up in Bangladesh focused to support diabetic patients with home service fully run by experienced and qualified doctors. Our vision is to establish 360-degree solutions and services online. We work to provide healthy lifestyle education and the best service and products at an affordable price for our consumers.
          </p>

          <a className='btn mt-5 mb-5' href='/about' style={styles.button}>
            Learn More <FaArrowRight style={styles.icon} />
          </a>
        </div>
        <div className="col-md-5 mb-3 me-5 ms-auto">
          {/* Content for the second column */}
          <img src={award} className="img-fluid" style={styles.image} alt="National Award" />
        </div>
      </div>
    </div>
  );
}

// Custom styles
const styles = {
  title: {
    fontFamily: 'Roboto', // Font family
    
    color: '#06b4cb', // Title color
  },
  description: {
    fontFamily: 'Roboto', // Font family
    textAlign: 'justify', // Justified text
    color: '#333', // Text color
    fontSize: '18px', // Font size
    lineHeight: '1.5', // Line height
  },
  button: {
    fontFamily: 'Roboto', // Font family
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
  image: {
    maxWidth: '100%', // Ensure the image is responsive
    height: 'auto', // Maintain the aspect ratio
    objectFit: 'cover', // Cover the available space
  },
};
