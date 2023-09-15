import React from 'react';
import TextField from "@mui/material/TextField";

import "./ContactUs.css";
import Contactus from "../../images/Contact.png";

export default function Contact() {
  return (
    <div className="contact-container">
      <div>
        <img src={Contactus} alt="Contact" className="contact-icon" />
      </div>
      <div className="contact-form">
        <form action="Submit" className="contact-form-details">
          <h2>Contact us</h2>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="form-textfield"
          />
          <TextField
            id="outlined-basic"
            label="Email address"
            variant="outlined"
            className="form-textfield"
          />
          <TextField
            id="outlined-multiline-static"
            label="Enter your message"
            multiline
            rows={4}
            className="form-textfield"
          />
          <button className="contact-btn ">Submit</button>
        </form>
      </div>
    </div>
  );
}
