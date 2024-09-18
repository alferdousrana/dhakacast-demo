import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function LogIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
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
      const response = await axios.post('http://localhost:3005/login', formData);
      if (response.status === 200) {
        // Save user login status
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        // Redirect to the user account page
        navigate('/user-account');
      }
    } catch (error) {
      setLoginError('Invalid email or password');
      console.error('Login error:', error);
    }
  };



  return (
    <section style={{ height: '100vh' }}>
      <div className="container-fluid" style={{ height: 'calc(100% - 73px)' }}>
        <div className="row d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* Social Sign-In Buttons */}
              <div className="d-flex flex-row align-items-center justify-content-center" style={{ marginBottom: '1.5rem' }}>
                <p className="fw-normal mb-0 me-3" style={{ marginRight: '1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>
                  Sign in with:
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

              <div className="divider d-flex align-items-center my-4" style={{ display: 'flex', alignItems: 'center', margin: '1.5rem 0' }}>
                <p className="text-center fw-bold mx-3 mb-0" style={{ flex: '1', textAlign: 'center', margin: '0 1rem', fontWeight: 'bold' }}>
                  OR
                </p>
              </div>

              {/* Email input */}
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

              {/* Password input */}
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

              {/* Error message */}
              {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

              <div className="d-flex justify-content-between align-items-center" style={{ marginBottom: '1.5rem' }}>
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3" style={{ fontSize: '0.875rem', color: '#495057' }}>
                    Remember me
                  </label>
                </div>
                <a href="#!" style={{ color: '#611f1f', textDecoration: 'none' }} className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center mt-4 pt-2" style={{ paddingTop: '1.5rem' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', fontSize: '1.25rem', color: '#fff', backgroundColor: '#06b4cb', border: 'none' }}>
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0" style={{ fontSize: '0.875rem', marginTop: '1rem' }}>
                  Don't have an account?{' '}
                  <a href="/register" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
