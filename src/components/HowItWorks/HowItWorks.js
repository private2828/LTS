import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons'; 
import './HowItWorks.css';
import Feature_Icon_1 from './assets/images/feature-icon-1.png';
import Feature_Icon_2 from './assets/images/feature-icon-2.png';
import Feature_Icon_3 from './assets/images/feature-icon-3.png';

const HowItWorks = () => {
  return (
    <section className="section feature" aria-label="feature">
      <div className="container">
        <ul className="feature-list grid-list">
          <li>
            <div className="feature-card">
              <div className="card-icon">
                <img src={Feature_Icon_1} width="72" height="91" alt="Feature 1" />
              </div>
              <h3 className="h3 card-title">Solutions and specialized</h3>
              <p className="card-text">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>
              <a href="#" className="card-btn" aria-label="Read more">
                <IonIcon icon={arrowForward} className="ion-icon" />
              </a>
            </div>
          </li>
          <li>
            <div className="feature-card">
              <div className="card-icon">
                <img src={Feature_Icon_2}width="94" height="94" alt="Feature 2" />
              </div>
              <h3 className="h3 card-title">Multiple warehouses</h3>
              <p className="card-text">
                We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...
              </p>
              <a href="#" className="card-btn" aria-label="Read more">
                <IonIcon icon={arrowForward} className="ion-icon" />
              </a>
            </div>
          </li>
          <li>
            <div className="feature-card">
              <div className="card-icon">
                <img src={Feature_Icon_3} width="93" height="93" alt="Feature 3" />
              </div>
              <h3 className="h3 card-title">Tracking made easy</h3>
              <p className="card-text">
                A tracking number for the entire process, so that you can find the exact position. This process will help you.
              </p>
              <a href="#" className="card-btn" aria-label="Read more">
                <IonIcon icon={arrowForward} className="ion-icon" />
              </a>
            </div>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default HowItWorks;
