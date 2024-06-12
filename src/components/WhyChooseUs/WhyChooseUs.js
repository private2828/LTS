import React from 'react';
import { IonIcon } from '@ionic/react';
import './WhyChooseUs.css';
import AboutShape1  from './assets/images/about-shape-1.png'
import AboutShape2  from './assets/images/about-shape-2.png'
import AboutBanner  from './assets/images/about-banner.jpg'

const WhyChooseUs = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner img-holder" style={{ '--width': '400', '--height': '720' }}>
          <img src={AboutBanner} width="400" height="720" loading="lazy" alt="" className="img-cover" />
          <img src={AboutShape1}width="260" height="170" loading="lazy" alt="" className="abs-img abs-img-1" />
          <img src={AboutShape2} width="500" height="500" loading="lazy" alt="" className="abs-img abs-img-2" />
        </figure>

        <div className="about-content">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="h2 section-title">We Are Professional Logistics & Cargo Agency</h2>
          <p className="section-text">
            Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam inventore.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <div className="about-icon">
                <IonIcon name="chevron-forward" />
              </div>
              <p className="about-text">
              ➤ Go beyond logistics, make the world go round and revolutionize business.
              </p>
            </li>
            <li className="about-item">
              <div className="about-icon">
                <IonIcon name="chevron-forward" />
              </div>
              <p className="about-text">
                Logistics through innovation, dedication, and technology. ready, set, done.
              </p>
            </li>
            <li className="about-item">
              <div className="about-icon">
                <IonIcon name="chevron-forward" />
              </div>
              <p className="about-text">
                We take pride in serving our customers safely. together with passion.
              </p>
            </li>
            <li className="about-item">
              <div className="about-icon">
                <IonIcon name="chevron-forward" />
              </div>
              <p className="about-text">
                Imagination what we can easily see is only a small percentage.
              </p>
            </li>
            <li className="about-item">
              <div className="about-icon">
                <IonIcon name="chevron-forward" />
              </div>
              <p className="about-text">
                Quality never goes out of style. safety, quality, professionalism.
              </p>
            </li>
            <li className="about-item">
              <div className="about-icon">
                <IonIcon name="chevron-forward" />
              </div>
              <p className="about-text">
                The quality shows in every move we make where business lives.
              </p>
            </li>
          </ul>

          <a href="#" className="btn">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
