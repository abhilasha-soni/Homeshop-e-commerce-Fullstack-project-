import React from 'react';

import "./Footer.css";

export default function HomeShop() {
  return (
    <div>
      <h3 className='customer-service'>HomeShop</h3>
      <ul>
        <li>
          <a href="/aboutus">About us</a>
        </li>
        <li>
          <a href="/locations">Locations</a>
        </li>
        <li>
          <a href="/termsofuse">Terms of use</a>
        </li>
        <li>
          <a href="/privacy">Privacy Policy</a>
        </li>
        <li>
          <a href="/return">Return Policy</a>
        </li>
      </ul>
    </div>
  );
  }
