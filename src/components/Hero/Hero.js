import React from 'react';
import './Hero.css';
import heroImage from './assets/images/hero-banner.jpg';
import heroShape from './assets/images/hero-shape.png';
import SimpleForm from '../Forms/SimpleForm';

const Hero = () => {
  // Check if screen width is greater than 767px (desktop view)
  const isDesktop = window.innerWidth > 767;

  return (
    <>
      <section
        className="section hero"
        aria-label="home"
        id="home"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container">
          <div className="glass-container">
            <div className="hero-content">
              <img src={heroShape} width="100" height="100" loading="lazy" className="hero-shape shape-1" alt="shape" />
              <h2 className="h1 hero-title">
                <span className="span">TO</span>
                <span className="span2">Every</span>
                <span className="direction">DIRECTION</span>
              </h2>
            </div>
            {/* Conditionally render SimpleForm only on desktop */}
            {isDesktop && <SimpleForm className="hero-form" />}
            <div className="hero-bottom-content">
              <p className="hero-text">
                Move everything forward with our advanced digital freight platform for Shippers & Carriers
              </p>
              <a href="/vehicles" className="btn-outline">View Vehicles</a>
            </div>
            <img src={heroShape} width="100" height="100" loading="lazy" className="hero-shape shape-2" alt="shape" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
