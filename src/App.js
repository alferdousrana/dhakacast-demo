import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Achievement from './Components/Achievement';
import Doctor from './Components/Doctor';
import Nurse from './Components/Nurse';
import HealthTips from './Components/HealthTips';
import SampleCollection from './Components/SampleCollection';
import Shop from './Components/Shop';
import Research from './Components/Research';
import Impact from './Components/Impact';
import AllActivities from './Components/AllActivities';
import ItemDetails from './Components/ItemDetails';
import DoctorDetails from './Components/DoctorDetails';
import NurseDetails from './Components/NurseDetails';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import UserAccount from './Components/UserAccount';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import UserEdit from './Components/UserEdit'
import ProtectedRoute from './Components/ProtectedRoute';
import PublicRoute from './Components/PublicRoute'; // Import the PublicRoute component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <div className="Container">
          <NavBar />
          <Routes>
            {/* Public Routes */}
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/achievement" element={<Achievement />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/doctor" element={<Doctor />} />
            <Route exact path="/doctordetails/:doctorId" element={<DoctorDetails />} />
            <Route exact path="/nurse" element={<Nurse />} />
            <Route exact path="/nursedetails/:nurseId" element={<NurseDetails />} />
            <Route exact path="/healthTips" element={<HealthTips />} />
            <Route exact path="/sampleCollection" element={<SampleCollection />} />
            <Route exact path="/research" element={<Research />} />
            <Route exact path="/impact" element={<Impact />} />
            <Route exact path="/all-activities" element={<AllActivities />} />
            <Route exact path="/item-details/:id" element={<ItemDetails />} />

            {/* PublicRoute wraps login and register */}
            <Route path="/login" element={<PublicRoute><LogIn /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><SignUp /></PublicRoute>} />

            {/* Protected Route (only accessible when logged in) */}
            <Route
              path="/user-account"
              element={
                <ProtectedRoute>
                  <UserAccount/>
                </ProtectedRoute>
              }
            />
             <Route path="/user-edit" element={
              <ProtectedRoute>
              <UserEdit/>
              </ProtectedRoute>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
