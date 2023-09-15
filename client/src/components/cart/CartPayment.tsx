import React from "react";
import { useSelector } from "react-redux";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import "./Cart.css";
import CartDetails from "./CartDetails";
import axios from "axios";

export default function CartPayment() {
  const item = useSelector((state: RootState) => state.cart.cartList);

  const userDetail = useSelector((state: RootState) => state.user.userInfo);

  const totalItem = () => {
    let totalQty = 0;
    let totalPrice = 0;
    item.forEach((price) => {
      totalQty += price.quantity;
      totalPrice += price.price * price.quantity;
    });
    return { totalPrice, totalQty };
  };

  function onClickHandler() {
    //send order data to backend
    const token = localStorage.getItem("userToken");
    const url = `https://backend-server-homeshop.onrender.com/orders/${userDetail?._id}`;

    axios
      .post(
        url,
        { productList: item },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "new Data");
        if (response.status === 201) {
          alert("thanks for shopping with us!");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please login to proceed for checkout.");
          return;
        }
      });
  }

  return (
    <div>
      <h2 className="cart-header">Order Summary</h2>
      <div className="payment-total-details">
        <Card className="cart-item-payment" sx={{ width: 800 }}>
          <div>
            <h4>Total no. of products: {totalItem().totalQty}</h4>
            <h4>Total: $ {totalItem().totalPrice}</h4>
            <br />
            <Button
              aria-label="share"
              variant="contained"
              className="cart-btn-addtocart"
              sx={{ backgroundColor: "cadetblue" }}
              onClick={onClickHandler}
            >
              Proceed to Checkout
            </Button>
          </div>
          <Link
            to={`/products`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button
              aria-label="share"
              variant="contained"
              className="cart-btn-addtocart"
              sx={{ backgroundColor: "cadetblue" }}
            >
              Continue Shopping
            </Button>
          </Link>
          <p>Tracked shipping on all orders</p>
          <p>14 days return</p>

          <p>
            By clicking the checkout button above, you agree to the terms and
            conditions and privacy policy.
          </p>
        </Card>
      </div>
    </div>
  );
}
