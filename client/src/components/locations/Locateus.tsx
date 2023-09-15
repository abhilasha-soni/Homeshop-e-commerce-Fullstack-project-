import React from "react";

import Location from "../../images/location.png"

import "./Locations.css";

export default function Locateus() {
  return (
    <div className="location-container">
<img src={Location} alt="Location" />
      <h1>We are located at:</h1>
      <div className="locations-grid">
        <div className="location-block">
          <h2>Stockholm</h2>
          <p className="location-p">
            Homeshop, Storgatan 12, 123 45 Stockholm.
          </p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
        <div className="location-block">
          <h2>Göteborg</h2>
          <p className="location-p">Homeshop, Vasagatan 34, 678 90 Göteborg</p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
        <div className="location-block">
          <h2>Malmö</h2>
          <p className="location-p">Homeshop, Kungsgatan 56, 345 67 Malmö</p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
        <div className="location-block">
          <h2>Umeå</h2>
          <p className="location-p">Homeshop, Drottninggatan 78, 901 23 Umeå</p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
        <div className="location-block">
          <h2>Uppsala</h2>
          <p className="location-p">Homeshop, Sveavägen 90, 456 78 Uppsala.</p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
        <div className="location-block">
          <h2>Halmstad</h2>
          <p className="location-p">
            Hmeshop, Norra Hamngatan 12, 789 01 Halmstad.
          </p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
        <div className="location-block">
          <h2>Linköping</h2>
          <p className="location-p">
            Homeshop, Västra Hamngatan 56, 567 89 Linköping.
          </p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
        <div className="location-block">
          <h2>Luleå</h2>
          <p className="location-p">
            Homeshop, Södra Hamngatan 78, 890 12 Luleå.
          </p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
        <div className="location-block">
          <h2>Lund</h2>
          <p className="location-p">
            Homeshop, Östra Hamngatan 34, 234 56 Lund
          </p>
          <p className="location-p">Open All days </p>
          <p className="location-p">Showroom Hours: 10AM to 6PM</p>
        </div>
      </div>
    </div>
  );
}
