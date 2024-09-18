import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [signupError, setSignupError] = useState(''); // New state to handle email error
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.number) newErrors.number = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3005/signup', formData);
      if (response.status === 200) {
        // Save user login status
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        // Redirect to the user account page
        navigate('/user-account');
      }
    } catch (error) {
      // If there's an error, set the signup error message
      if (error.response && error.response.data.error) {
        setSignupError(error.response.data.error); // Display email already exists error
      } else {
        console.error('Error during signup:', error);
      }
    }
  };

  return (
    <section style={{ height: '100vh' }}>
      <div className="container-fluid" style={{ height: 'calc(100% - 73px)' }}>
        <div className="row d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="col-md-7 col-lg-5 col-xl-4">
            <form onSubmit={handleSubmit}>
              {/* Social Sign Up Buttons */}
              <div className="d-flex flex-row align-items-center justify-content-center" style={{ marginBottom: '1.5rem' }}>
                <p className="fw-normal mb-0 me-3" style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>
                  Sign Up with:
                </p>
                <button type="button" className="btn btn-primary btn-floating mx-1" style={{ backgroundColor: '#06b4cb', border: 'none' }}>
                  <FaFacebook />
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1" style={{ backgroundColor: '#06b4cb', border: 'none', margin: '0 0.25rem' }}>
                  <FaTwitter />
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1" style={{ backgroundColor: '#06b4cb', border: 'none', margin: '0 0.25rem' }}>
                  <FaLinkedin />
                </button>
              </div>

              {/* Name Input */}
              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ced4da', borderRadius: '0.3rem' }}
                />
                <label htmlFor="name" style={{ position: 'absolute', top: '-0.5rem', left: '0.75rem', background: '#fff', padding: '0 0.25rem', fontSize: '0.875rem' }}>
                  Full Name
                </label>
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ced4da', borderRadius: '0.3rem' }}
                />
                <label htmlFor="email" style={{ position: 'absolute', top: '-0.5rem', left: '0.75rem', background: '#fff', padding: '0 0.25rem', fontSize: '0.875rem' }}>
                  Email address
                </label>
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </div>

              {/* Display signup error (e.g. Email already used) */}
              {signupError && <p style={{ color: 'red' }}>{signupError}</p>}

              {/* Phone Number Input */}
              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <input
                  type="number"
                  id="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ced4da', borderRadius: '0.3rem' }}
                />
                <label htmlFor="number" style={{ position: 'absolute', top: '-0.5rem', left: '0.75rem', background: '#fff', padding: '0 0.25rem', fontSize: '0.875rem' }}>
                  Phone Number
                </label>
                {errors.number && <p style={{ color: 'red' }}>{errors.number}</p>}
              </div>

              {/* Password Input */}
              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '0.75rem', fontSize: '1rem', border: '1px solid #ced4da', borderRadius: '0.3rem' }}
                />
                <label htmlFor="password" style={{ position: 'absolute', top: '-0.5rem', left: '0.75rem', background: '#fff', padding: '0 0.25rem', fontSize: '0.875rem' }}>
                  Password
                </label>
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', fontSize: '1.25rem', backgroundColor: '#06b4cb', border: 'none' }}
                >
                  Sign Up
                </button>
                <p className="small fw-bold mt-4 pt-1 mb-0" style={{ fontSize: '0.875rem', marginTop: '1rem' }}>
                  Do you have an account?{' '}
                  <a href="/login" className="link-danger">
                    Log In
                  </a>
                </p>
              </div>
              
            </form>
          </div>
          <div className="col-md-5 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
