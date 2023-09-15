import React from 'react';

// import Furniture from "../../images/1.png";
import furniture from "../../images/furniture.png";
import outdoor from "../../images/outdoor1.png";
import bedding from "../../images/bedding1.png";
import rugs from "../../images/rugs.png";
import decor from "../../images/decor.png";
import bath from "../../images/bath.png";
import sale from "../../images/sale.png";
import bestseller from "../../images/bestseller.png";
import newArrivals from "../../images/newarrivals.png";
import allProducts from "../../images/allproducts.png";

import "./Home.css";
import { Link } from 'react-router-dom';

export default function() {
  return (
    <div>
      <h1>Shop by Department</h1>
      <div className="home-categories-container">
        <div>
          <Link to={`/products/department/${"furniture"}`}>
            <img
              src={furniture}
              alt="Furniture"
              className="home-categories-image"
            />
            <p className="home-features-text">Furniture</p>
          </Link>
        </div>
        <div>
          <Link to={`/products/department/${"Outdoor"}`}>
            <img
              src={outdoor}
              alt="Furniture"
              className="home-categories-image"
            />
            <p className="home-features-text">Outdoor</p>
          </Link>
        </div>
        <div>
          <Link to={`/products/department/${"Bedding"}`}>
            <img
              src={bedding}
              alt="Furniture"
              className="home-categories-image"
            />
            <p className="home-features-text">Bedding</p>
          </Link>
        </div>
        <div>
          <Link to={`/products/department/${"Rugs"}`}>
            <img src={rugs} alt="Furniture" className="home-categories-image" />
            <p className="home-features-text">Rugs</p>
          </Link>
        </div>
        <div>
          <Link to={`/products/department/${"Decor"}`}>
            <img
              src={decor}
              alt="Furniture"
              className="home-categories-image"
            />
            <p className="home-features-text">Decor</p>
          </Link>
        </div>
        <div>
          <Link to={`/products/department/${"Bath"}`}>
            <img src={bath} alt="Furniture" className="home-categories-image" />
            <p className="home-features-text">Bath</p>
          </Link>
        </div>
        <div>
          <Link to={`/products/collection/${"Sale"}`}>
            <img src={sale} alt="Furniture" className="home-categories-image" />
            <p className="home-features-text">SALE</p>
          </Link>
        </div>
        <div>
          <Link to={`/products/collection/${"New Arrivals"}`}>
            <img
              src={newArrivals}
              alt="Furniture"
              className="home-categories-image"
            />
            <p className="home-features-text">New Arrivals</p>
          </Link>
        </div>
        <div>
          <Link to={`/products/collection/${"Best Seller"}`}>
            <img
              src={bestseller}
              alt="Furniture"
              className="home-categories-image"
            />
            <p className="home-features-text">Best Sellers</p>
          </Link>
        </div>
        <div>
          <Link to={`/products`}>
            <img
              src={allProducts}
              alt="Furniture"
              className="home-categories-image"
            />
            <p className="home-features-text">All products</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
