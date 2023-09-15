import React from 'react';

import "./Footer.css";
import { Link } from 'react-router-dom';

export default function MyHomeshop() {
  return (
    <div>
      <h3 className="customer-service">Your HomeShop</h3>
      <ul>
        <Link to={"/login"}>
        <li>Log in</li>
        </Link>
        
        <Link to={"/accountUpdate"}>
          <li>Update account information</li>
        </Link>
        <Link to={"/orders"}>
          <li>My Order History</li>
        </Link>
    <Link to={"/wishList"}>
        <li>My Wish List</li>
    </Link>
  <Link to={"/cart"}>
        <li>My Cart</li>
    </Link>
      </ul>
    </div>
  );
}
