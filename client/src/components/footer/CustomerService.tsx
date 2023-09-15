import React from 'react';

import "./Footer.css";

export default function CustomerService() {
  return (
    <div>
      <h3 className='customer-service'>Customer Service</h3>
      <ul>
        <li>
          {" "}
          <a href="/contactus">Contact us</a>
        </li>
        <li>FAQs</li>
      </ul>
    </div>
  );
}
