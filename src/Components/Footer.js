import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import footerbg from './Image/footerbg.png'


export default function Footer() {
  return (
    <div className="mt-3" style={{backgroundImage: `url(${footerbg})`,backgroundSize: "cover",  backgroundPosition: 'center', height: '620px'}}>
      <div style={styles.container}>
        
        <div className="row">
        <h2 className="text-center mb-4 pt-5" style={styles.heading}>CONTACT US</h2>
          {/* Contact Form */}
          <div className="col-md-5  mt-5 offset-md-1">
            <form style={styles.contactForm}>
              <div className="form-group">
                <input type="text" className="form-control mb-3" placeholder="Your Full Name" style={styles.input} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control mb-3" placeholder="Phone Number" style={styles.input} />
              </div>
              <div className="form-group">
                <input type="email" className="form-control mb-3" placeholder="Email" style={styles.input} />
              </div>
              <div className="form-group">
                <textarea className="form-control mb-3" rows="4" placeholder="Message" style={styles.textarea}></textarea>
              </div>
              <button type="submit" className="btn btn-info btn-block" style={styles.submitButton}>Submit</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div style={styles.contactInfo}>
              <p><FaMapMarkerAlt /> House #19, Road #5, Sector #11, Uttara, Dhaka 1205.</p>
              <p><FaPhoneAlt /> +8801315087687</p>
              <p><FaEnvelope /> hello@dhakacast.com</p>
              <p><FaEnvelope /> dhakacast@gmail.com</p>
              <div style={styles.socialIcons}>
                <a href="https://www.facebook.com/dhakacastltd" target="_blank" style={styles.socialIcon}><FaFacebook /></a>
                <a href="https://www.youtube.com/@dhakacast3519" target="_blank"style={styles.socialIcon}><FaYoutube /></a>
                <a href="https://www.linkedin.com/company/dhaka-cast-ltd/" target="_blank"style={styles.socialIcon}><FaLinkedin /></a>
                <a href="https://x.com/DhakaCast" target="_blank" style={styles.socialIcon}><FaTwitter /></a>
                <a href="https://www.instagram.com/dhakacast/" target="_blank" style={styles.socialIcon}><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

const styles = {
  
  // container: {
  //   zIndex: 2,
  //   position: 'relative',
  // },
  heading: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '40px',
    fontWeight: 'bold',
  },

  contactForm: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    fontSize: '12px',
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '12px',
    fontFamily: 'Roboto',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '12px',
    fontFamily: 'Roboto',
  },
  submitButton: {
    backgroundColor: '#06b4cb',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '18px',
    fontFamily: 'Roboto',
  },
  contactInfo: {
    color: 'white',
    fontSize: '16px',
    fontFamily: 'Roboto'
  },
  socialIcons: {
    marginTop: '40px',
    
  },
  socialIcon: {
    color: 'white',
    marginRight: '30px',
    fontSize: '30px',
  },
  socialIconLink: {
    color: 'white',
    marginRight: '15px',
    fontSize: '24px',
  },
};
