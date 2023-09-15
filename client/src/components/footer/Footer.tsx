import React from 'react';

import "./Footer.css";

import MyHomeshop from './MyHomeshop'
import HomeShop from './HomeShop'
import Logo from "../../images/Shopping Logo.png";
import CustomerService from './CustomerService';
import BottomBar from './BottomBar';
import Subscribe from './Subscribe';

export default function Footer() {
  return (
    <div>
      <div className="footer-container">
        <HomeShop />
        <MyHomeshop />
        {/* <img src={Logo} alt="logo" className="footer-logo" /> */}
        <CustomerService />
        <Subscribe/>
      </div>
      <div>
        <BottomBar/>
      </div>
    </div>
  );
}
