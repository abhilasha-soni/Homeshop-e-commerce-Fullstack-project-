import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
  Box,
} from "@mui/material";

import { Item } from "../../types/types";
import { actions } from "../../redux/slice/products";
// import { cartActions } from "../../redux/";
import "./Product.css";
import { RootState } from "../../redux/store";
import ProductQuickView from "./ProductQuickView";
import { cartActions } from "../../redux/slice/cart";
// import Alert from "./Alert";

type Prop = {
  item: Item;
};

export default function ProductItem({ item }: Prop) {
  const dispatch = useDispatch();

    function productDetails(item: Item) {
    dispatch(actions.productDetails(item));
  }
function cartItems (cartItem:Item) {
  dispatch (cartActions.addToCart (cartItem));
}

  function wishlistItem(wishlist: Item) {
    dispatch(actions.addToWishList(wishlist));
  }
  const wishlist = useSelector((state: RootState) => state.product.wishlist);

  const inWishList = wishlist.find((wish: Item) => wish._id === item._id);

  return (
    <div>
      <Card
        className="card"
        sx={{
          width: 345,
          height: 650,
          boxShadow: "none",
          "&:hover": { boxShadow: 3 },
          "&:hover Button": { display: "flex" },
          position: "relative",
        }}
      >
        <div className="card-top">
          <FavoriteIcon
            className="fav-icon"
            onClick={() => wishlistItem(item)}
            color={inWishList ? "error" : "action"}
            sx={{
              position: "absolute",
              top: 15,
              right: 45,
              fontSize: 40,
              backgroundColor: "white",
              borderRadius: "50%",
              padding: 0.5,
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "rgb(226, 88, 60)",
              zIndex: 1,
            }}
          />
          <Box>
              <ProductQuickView item={item}/>
          </Box>
          <Link
            to={`/products/${item._id}`} key={item._id}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <CardActionArea>
              <Box>
                <CardMedia
                  component="img"
                  image={item.productImg}
                  alt={item.title}
                  sx={{
                    width: 300,
                    height: 300,
                    borderRadius: "25px",
                    zIndex: 0,
                  }}
                />
                {item.badge && (
                  <h3 className="badge">{item.badge.toUpperCase()}</h3>
                )}
              </Box>
            </CardActionArea>
          </Link>
        </div>

        <CardContent>
          <p>{item.title}</p>
          <p>{item.category}</p>
          <p>Price: ${item.price}</p>
          <Rating
            initialValue={item.rating}
            iconsCount={5}
            allowFraction={true}
            readonly={true}
            fillColor="rgb(226, 88, 60)"
            emptyColor="gray"
            size={20}
          />
        </CardContent>
        <div>
          <CardActions>
            <button aria-label="share" className="cart-btn-addtocart" onClick={()=> cartItems(item)}>
              <ShoppingCartOutlinedIcon />
              <p className="cart-text">Add to Cart</p>
            </button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
