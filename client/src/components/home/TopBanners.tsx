import React from "react";

import Video from "../../images/HomeBanner.mp4";
import "./mp4.d.ts";
import "./Home.css";
import Office from "../../images/office.png";
import Dining from "../../images/dining.png";
import Outdoor from "../../images/outdoor.png";
import Wallart from "../../images/wallart.png";
import Bedding from "../../images/bedding.png";

export default function TopBanners() {
  return (
    <div>
      <div className="banner-top-container">
        <div>
          <video
            width="800"
            height="500"
            autoPlay
            muted
            className="banner-video-left"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="banner-top-right-container">
          <img src={Office} alt="Office chair" className="banner-top-image" />
          <img src={Dining} alt="Dining table" className="banner-top-image" />
        </div>
      </div>
      <div className="banner-top-container-below">
        <img
          src={Outdoor}
          alt="Outdoor furniture"
          className="banner-top-container-below-image"
        />
        <img
          src={Wallart}
          alt="wall art"
          className="banner-top-container-below-image"
        />
        <img
          src={Bedding}
          alt="bedding"
          className="banner-top-container-below-image"
        />
      </div>
    </div>
  );
}
