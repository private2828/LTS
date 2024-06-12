import React, { useState } from 'react';
import './DriverForm.css';
import driverImage from './assets/images/Driver_Image.jpg'; // Ensure the image path is correct
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DriverForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for joining us! Our manager will contact you shortly.');
    // Add form submission logic here (e.g., send data to server)
  };

  return (
    <div className="form-section">
      <div className="form-container">
        <h2>Be the boss!</h2>
        <p>Drive with Trukky and be a leader.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your active email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
      <div className="image-container">
        <img src={driverImage} alt="Driver" />
      </div>
    </div>
  );
};

export default DriverForm;
