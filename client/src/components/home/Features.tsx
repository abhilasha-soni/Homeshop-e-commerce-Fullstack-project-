import React from 'react';

import Selection from "../../images/1.png";
import CustomerService from "../../images/2.png";
import Delivery from "../../images/3.png";
import Experience from "../../images/4.png";
import "./Home.css";

export default function Features() {
  return (
    <div className="home-features-container">
      <div className="home-features-block">
        <img
          src={Selection}
          alt="ProductSelection"
          className="home-features-icon"
        />
        <h2>Unbeatable selection</h2>
        <p className="home-features-text">All things home, all in one place</p>
      </div>
      <div className="home-features-block">
        <img
          src={CustomerService}
          alt="Customer Service"
          className="home-features-icon"
        />
        <h2>Expert customer service</h2>
        <p className="home-features-text">
          Our friendly team's on hand seven days a week.
        </p>
      </div>
      <div className="home-features-block">
        <img src={Delivery} alt="Delivery" className="home-features-icon" />
        <h2>Fast & Free Shipping Over $35*</h2>
        <p className="home-features-text">
          Plus, two-day delivery on thousands of items.
        </p>
      </div>
      <div className="home-features-block">
        <img src={Experience} alt="Experience" className="home-features-icon" />
        <h2>Amazing Value Every Day</h2>
        <p className="home-features-text">
          Items you love at prices that fit your budget.
        </p>
      </div>
    </div>
  );
}
