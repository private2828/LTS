// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "../src/Pages/About/About";

import Service from "./components/Services/Services";
import BookingForm from "./components/BookingForm/BookingForm";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Driver_Hirng from "./Pages/Driver_Hiring/Driver_Hiring";
import Booking from "./Pages/Booking/Booking";
import WhyChooseUsPage from "./Pages/WhyChooseUsPage/WhyChooseUsPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/services"
                    element={<Service/>}
                />
                <Route
                    path="/booking"
                    element={<Booking/>}
                />
                <Route path="/contactus" element={<ContactUs/>} />
                <Route path="/driverhiring" element={<Driver_Hirng/>} />
                <Route path="/faq" element={<WhyChooseUsPage/>} />

                
            </Routes>
        </Router>
        
    );
}

export default App;
