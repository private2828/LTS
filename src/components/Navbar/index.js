import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavContact,
  NavBtnLink,
} from './NavbarElements';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setTop(0); // Show navbar
      } else {
        setTop(-60); // Hide navbar (height is 60px)
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Nav style={{ top: `${top}px` }}>
      <NavLogo to="/">Truckys</NavLogo>
      <Bars />
      <NavMenu>
        <NavLink to="/" activeStyle>
          Home
        </NavLink>
        <NavLink to="/services" activeStyle>
          Vehicles
        </NavLink>
        <NavLink to="/booking" activeStyle>
          Bookings
        </NavLink>
        <NavLink to="/about" activeStyle>
          About Us
        </NavLink>
        <NavLink to="/contactus" activeStyle>
          Contact Us
        </NavLink>
        <NavLink to="/driverhiring" activeStyle>
          Drivers
        </NavLink>
      </NavMenu>
      <NavContact>
        <FaPhoneAlt className="phone-icon" />
        <span>7506195951</span>
      </NavContact>
      
    </Nav>
  );
};

export default Navbar;
