import { FaBars, FaPhoneAlt } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #3a3a3a;  
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 12;
  position: fixed;
  width: 100%;
  top: 0;
  transition: top 0.3s;
`;

export const NavLogo = styled(Link)`
  color: #ffffff; 
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: #d3d3d3;  
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #ffffff;  
  }

  &:hover {
    color: #ffffff;   
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavContact = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;  

  .phone-icon {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: #808080;
    }
  }
`;
