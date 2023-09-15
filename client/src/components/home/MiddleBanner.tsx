import React from 'react';

import "./Home.css";
import Banner from "../../images/Banner.png"

export default function MiddleBanner() {
  return (
    <div>
      <img src={Banner} alt="Banner" className='home-middle-banner'/>
    </div>
  )
}
