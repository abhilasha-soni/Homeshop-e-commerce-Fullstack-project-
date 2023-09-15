import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";


export default function Departments() {

  return (
    <div>
      <ul className="Navbar-bottom-container-categories">
        <Link
          to={`/products/department/${"furniture"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">Furniture</li>
        </Link>
        <Link
          to={`/products/department/${"Outdoor"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">Outdoor</li>
        </Link>
        <Link
          to={`/products/department/${"Bedding"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">Bedding</li>
        </Link>
        <Link
          to={`/products/department/${"Rugs"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">Rugs</li>
        </Link>
        <Link
          to={`/products/department/${"Decor"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">Decor</li>
        </Link>
        <Link
          to={`/products/department/${"Bath"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">Bath</li>
        </Link>
        <Link
          to={`/products/collection/${"Sale"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">Sale</li>
        </Link>
        <Link
          to={`/products/collection/${"New Arrivals"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">New Arrivals</li>
        </Link>
        <Link
          to={`/products/collection/${"Best Seller"}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <li className="Navbar-bottom-container-list-items">Best Sellers</li>
        </Link>
      </ul>
    </div>
  );
}
