import React from 'react';

import About1 from "../../images/About1.png";
import About2 from "../../images/About2.png";
import About3 from "../../images/About3.png";
import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div>
      Aboutus
      <div className="about-us-container">
        <h1>About homeshop</h1>
        <img src={About1} alt="Banner" />
        <h1>A Global Brand</h1>
        <p>
          With global headquarters and an extensive network of logistics hubs
          and customer service centers, we’re here to create that feeling of
          home for everyone, anywhere. At homeshop, we believe that your home is
          more than just a place to live. It’s where you express your
          personality, create memories, and enjoy life. That’s why we offer a
          curated selection of stylish and affordable furniture that suits your
          taste, budget, and lifestyle.
        </p>
        <img src={About2} alt="Banner" />
        <h1>
          We’re here to help everyone, anywhere create their feeling of home.
        </h1>
        <p>
          Whether you’re looking for a cozy sofa, a sleek dining table, or a
          chic accent chair, you’ll find it at homeshop. We source our products
          from trusted manufacturers who share our commitment to quality,
          durability, and sustainability. We also offer free shipping, easy
          returns, and friendly customer service to make your shopping
          experience hassle-free. Homeshop was founded in 2020 by a team of
          passionate interior designers who wanted to make beautiful furniture
          accessible to everyone. Since then, we’ve grown to become one of the
          leading online furniture retailers in the country, serving thousands
          of happy customers across the nation.
        </p>
        <img src={About3} alt="Banner" />
        <h1>Explore More About Us</h1>
        <p>
          We invite you to browse our website and discover our amazing
          collection of furniture for every room in your home. Whether you’re
          looking for inspiration, advice, or just a new piece of furniture,
          we’re here to help you create your dream home. Thank you for choosing
          homeshop. We hope you enjoy shopping with us as much as we enjoy
          serving you.
        </p>
      </div>
    </div>
  );
}
