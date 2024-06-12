import React from 'react';
import './Footer.css'; // Import footer styles
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa'; // Import social media icons
import { NavLink } from 'react-router-dom'; // Import NavLink for routing

const Footer = () => {
  return (
    <footer className="Footer"> 
      <div className="Footer-container">
        <div className="Footer-section"> 
          <h2 className="Footer-title">NEWSLETTER SUBSCRIBE</h2> 
          <p className="Footer-subscribe-text">
            Subscribe to our newsletter and we will inform you about newest projects and promotions.
          </p>
          <div className="Footer-subscribe-form">
            <input type="email" placeholder="Your email..." className="Footer-input" /> 
            <button className="Footer-button"><i className="fas fa-envelope"></i></button> 
          </div>
        </div>
        <div className="Footer-section"> 
          <h2 className="Footer-title">QUICK LINKS</h2> 
          <ul className="Footer-list">
            <li><NavLink to="/about" className="Footer-link">About us</NavLink></li>
            <li><NavLink to="/services" className="Footer-link">Vehicles</NavLink></li> 
            <li><NavLink to="/faq" className="Footer-link">FAQ</NavLink></li> 
            <li><NavLink to="/driverhiring" className="Footer-link">Earn Money</NavLink></li> 
            <li><NavLink to="/contactus" className="Footer-link">Become a Business Partner</NavLink></li> 
          </ul>
        </div>
       
        <div className="Footer-section"> 
          <h2 className="Footer-title">CONTACT US</h2> 
          <address className="Footer-address">
            Shubhash Nagar, Nahur (w),<br />
            Mumbai - 400078,<br />
            India. <br />
            <strong>+91 7506195951, +91 9029991807</strong><br />
            <a href="mailto:admin@Truckly.net" className="Footer-link">ChetanMallah@gmail.com</a>
          </address>
          <div className="Footer-social-list">
            <a href="/" className="Footer-social-link"><FaFacebookF /></a> 
            <a href="/" className="Footer-social-link"><FaTwitter /></a> 
            <a href="/" className="Footer-social-link"><FaGooglePlusG /></a> 
          </div>
        </div>
      </div>
      <div className="Footer-bottom"> 
        <p>CopyRights Reserved. Truckly</p> 
        <p>DESIGNED AND DEVELOPED BY CHETAN MALLAH.</p> 
      </div>
    </footer>
  );
};

export default Footer;
