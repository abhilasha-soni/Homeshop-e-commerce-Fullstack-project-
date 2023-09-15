import React from 'react';
import "./Footer.css"
import { TextField } from '@mui/material';

export default function Subscribe() {
  return (
    <div className='footer-subscribe-container'>
      <h3 className='customer-service'>Subscribe</h3>
      <p>Get top deals, latest trends, and more.</p>
      <div>
        <TextField
          required
          id="outlined-required"
          placeholder="Email address"
        />
        <button className="btn">Sign up</button>
      </div>
    </div>
  );
}
