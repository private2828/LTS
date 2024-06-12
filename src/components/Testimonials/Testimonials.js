import React, { useRef, useState } from 'react';
import back_icon from './assets/images/back-icon.png';
import next_icon from './assets/images/next-icon.png';
import user_1 from './assets/images/user-1.png';
import user_2 from './assets/images/user-2.png';
import user_3 from './assets/images/user-3.png';
import user_4 from './assets/images/user-4.png';
import './Testimonials.css';

const Testimonials = () => {
    const slider = useRef();
    const [touchStart, setTouchStart] = useState(0);
    const [tx, setTx] = useState(0);

    const slideForward = () => {
        if(tx > -50) {
            setTx(prevTx => prevTx - 50);
        }
    };

    const slideBackward = () => {
        if(tx < 0) {
            setTx(prevTx => prevTx + 50);
        }
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        const touchEnd = e.touches[0].clientX;
        const diff = touchStart - touchEnd;
        if (diff > 0) {
            slideForward();
        } else {
            slideBackward();
        }
        setTouchStart(0);
    };

    return (
        <div className='testimonials'>
            <h1>What Customer Says </h1>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Chetan Mallah</h3>
                                    <span>Mumbai, India</span>
                                </div>
                            </div>
                            <p>Booking the truck from these site was really awesome , I would like to give 5 stars </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Chandan</h3>
                                    <span>Pune, India</span>
                                </div>
                            </div>
                            <p>Best stuff Dor truck bookign with 24/7 customer suppot , really Awesome</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Priya Singh</h3>
                                    <span>Edusity, India</span>
                                </div>
                            </div>
                            <p>Enrolling at Edusity has proven to be one of the wisest choices I've made. The encouraging community, cutting-edge facilities, and unwavering commitment to academic excellence have surpassed all my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Chetan Mallah</h3>
                                    <span>Edusity, India</span>
                                </div>
                            </div>
                            <p>Deciding to pursue my degree at Edusity has proven to be one of the most rewarding choices I've made. The nurturing community, outstanding facilities, and unwavering commitment to academic excellence have exceeded all my expectations</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
