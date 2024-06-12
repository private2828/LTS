import React from 'react';
import './BookingForm.css';

import Footer from '../Footer/Footer';
import Tata_Ace from '../BookingForm/assets/images/Tata_Ace.svg';
import eight_ft_1Ton from '../BookingForm/assets/images/eight_ft _1Ton.svg';
import Three_Wheeler from '../BookingForm/assets/images/Three_Wheeler.svg';
import eight_ft_Pickup from '../BookingForm/assets/images/eight_ft_Pickup.svg';
import fourteen_ft from '../BookingForm/assets/images/fourteen_ft.svg';
import tata407 from '../BookingForm/assets/images/tata407.svg';
import TopRightImage from '../BookingForm/assets/images/weight.svg';

const vehicles = [
    { name: "Tata Ace", price: "₹350 - ₹380", img: Tata_Ace, weight: "⛃ 700 kg" },
    { name: "8'ft 1 Ton", price: "₹530 - ₹560", img: eight_ft_1Ton, weight: "⛃ 800 kg" },
    { name: "3 Wheeler", price: "₹300 - ₹325", img: Three_Wheeler, weight: "⛃ 600 kg" },
    { name: "8'ft Pickup", price: "₹545 - ₹575", img: eight_ft_Pickup, weight: "⛃ 900 kg" },
    { name: "14'ft", price: "₹1780 - ₹1820", img: fourteen_ft, weight: "⛃ 1000 kg" },
    { name: "Tata 407", price: "₹1145 - ₹1175", img: tata407, weight: "⛃ 1200 kg" },
];

const BookingForm = () => {
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="left-section">
                        <h2 className="offer-title">Our Offers</h2>
                        <div className="stack-container">
                            {vehicles.map((vehicle, index) => (
                                <div
                                    className="stack"
                                    key={index}
                                    tabIndex="0"
                                    aria-label={`Select ${vehicle.name}`}
                                >
                                    <div className="top-right-container">
                                        <img src={TopRightImage} alt="Weight Icon" className="top-right-img" />
                                        <span className="weight-text">{vehicle.weight}</span>
                                    </div>
                                    <img src={vehicle.img} alt={vehicle.name} />
                                    <div className="stack-info">
                                        <p className="vehicle-name">{vehicle.name}</p>
                                        <p className="vehicle-price">{vehicle.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="form-container">
                            <h2>Booking Details</h2>
                            <form>
                                <input required type="text" placeholder="Your Name" aria-label="Your Name" />
                                <input required type="text" placeholder="Pickup Location" aria-label="Pickup Location" />
                                <input required type="text" placeholder="Drop-off Location" aria-label="Drop-off Location" />
                                <input required type="text" placeholder="Phone Number" aria-label="Phone Number" />
                                <input required type="email" placeholder="Email" aria-label="Email" />
                                <input required type="text" placeholder="Vehicle Name" aria-label="Vehicle Name" />
                                <input required type="date" placeholder="Pickup Date" aria-label="Pickup Date" />
                                <button type="submit">Book</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default BookingForm;