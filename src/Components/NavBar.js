import React from 'react';
import '../App.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    // Redirect to home page after logout
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand" href="/">
          <img src={`${process.env.PUBLIC_URL}/dcLogo.png`} width="160px" height="42px" alt="Logo" />
        </a>

        {/* Navbar Toggler Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${isActive('/')}`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActive('/about')}`} aria-current="page" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActive('/achievement')}`} aria-current="page" href="/achievement">Achievement</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActive('/shop')}`} aria-current="page" href="/shop">Shop</a>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${isActive('/doctor') || isActive('/nurse') || isActive('/healthTips') || isActive('/sampleCollection') ? 'active' : ''}`} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className={`dropdown-item ${isActive('/doctor')}`} href="/doctor">Doctor</a></li>
                <li><a className={`dropdown-item ${isActive('/nurse')}`} href="/nurse">Nurse</a></li>
                <li><a className={`dropdown-item ${isActive('/healthTips')}`} href="/healthTips">Health Tips</a></li>
                <li><a className={`dropdown-item ${isActive('/sampleCollection')}`} href="/sampleCollection">Sample Collection</a></li>
              </ul>
            </li>

             {/* Diagnosis Dropdown */}
             <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${isActive('/covid') || isActive('/dengue') || isActive('/general') ? 'active' : ''}`} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Diagnosis
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className={`dropdown-item ${isActive('/covid')}`} href="/">Covid-19</a></li>
                <li><a className={`dropdown-item ${isActive('/dengue')}`} href="/">Dengue</a></li>
                <li><a className={`dropdown-item ${isActive('/general')}`} href="/">General</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className={`nav-link ${isActive('/research')}`} aria-current="page" href="/research">Research</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${isActive('/impact')}`} aria-current="page" href="/impact">Impact</a>
            </li>
              {/* Conditional rendering for login/signup or account */}
              {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a className={`nav-link ${isActive('/user-account')}`} href="/user-account">My Account</a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a className="nav-link-login" href="/login">LogIn/SignUp</a>
              </li>
            )}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
