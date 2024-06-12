import React from 'react';
import './NewsLetter.css';
import New1 from './assets/images/New1.jpeg';

const Newsletter = () => {
  return (
    <section aria-label="newsletter" className="newsletter">
      <div className="container">
        <figure className="newsletter-banner img-holder">
          <img src={New1} width="303" height="381" alt="newsletter banner" className="w-100" />
          <div className="overlay-content">
            <div className="orange-line">
              <span className="line-text">Subscribe for offers and news</span>
              <form action="" className="newsletter-form">
                <input type="email" name="email_address" placeholder="Enter Your Email" aria-label="email" className="email-field" />
                <button type="submit" className="newsletter-btn">Subscribe Now</button>
              </form>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Newsletter;
