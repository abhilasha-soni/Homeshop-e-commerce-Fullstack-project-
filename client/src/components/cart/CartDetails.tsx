import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { RootState } from "../../redux/store";
import "./Cart.css";
import CartCard from "./CardCard";

export default function CartDetails() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);

  const navigate = useNavigate();

  const userDetail = useSelector((state: RootState) => state.user.userInfo);

  const totalItem = () => {
    let totalQty = 0;
    let totalPrice = 0;
    cartList.forEach((price) => {
      totalQty += price.quantity;
      totalPrice += price.price * price.quantity;
    });
    return { totalPrice, totalQty };
  };

  function onClickHandler() {
    const token = localStorage.getItem("userToken");
    const url = `https://backend-server-homeshop.onrender.com/orders/${userDetail?._id}`;
    console.log(url);

    if (!userDetail) {
      alert("please login to proceed with checkout!");
      navigate("/login");
    } else {
      axios
        .post(
          url,
          { productList: cartList },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response, "new Data");
          if (response.status === 200) {
            alert("Thanks for shopping with us!");
            navigate("/checkout");
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            alert("Please login to proceed for checkout.");
            return;
          }
        });
    }
  }
  //end

  return (
    <div>
      <div>
        <h2>My Cart</h2>
        <br />
        {cartList.length === 0 ? (
          <div>
            <h2>Cart is empty</h2>
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
          </div>
        ) : (
          <div>
            <Grid container spacing={0}>
              {cartList.map((item) => {
                return (
                  <div key={item._id.toString()}>
                    <Grid item xs>
                      <CartCard key={item._id.toString()} item={item} />
                    </Grid>
                  </div>
                );
              })}
            </Grid>
            <div>
              <h2 className="cart-header">Order Summary</h2>
              <div className="payment-total-details">
                <Card className="cart-item-payment" sx={{ width: 800 }}>
                  <div>
                    <h4>Total no. of products: {totalItem().totalQty}</h4>
                    <h4>Total: $ {totalItem().totalPrice}</h4>
                    <br />
                    {/* <Link to={"/checkout"}
                     style={{ color: "inherit", textDecoration: "none" }}
                     > */}
                    <button
                      className="cart-btn-checkout"
                      onClick={onClickHandler}
                    >
                      Proceed to Checkout
                    </button>
                    {/* </Link> */}
                  </div>
                  <Link
                    to={`/products`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <button className="cart-btn-checkout">
                      Continue Shopping
                    </button>
                  </Link>
                  <p>Tracked shipping on all orders</p>
                  <p>14 days return</p>

                  <p>
                    By clicking the checkout button above, you agree to the
                    terms and conditions and privacy policy.
                  </p>
                </Card>
              </div>
            </div>
            {/* {cartValue.map((item)=> {
              return (
                <div>
                  <CartPayment key={item.cartItems._id} item = {item} />;
                </div>
              );
 
            })} */}
          </div>
        )}
      </div>
    </div>
  );
}
