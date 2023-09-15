import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

import { Item } from "../../types/types";
import { actions } from "../../redux/slice/products";
// import { cartActions } from "../../redux/";
import "./Product.css";
import { RootState } from "../../redux/store";

export default function ProductDetail() {

  const product = useParams();
  const [productdata, setProductData] = useState<Item>();
  console.log(product.id);


   const dispatch = useDispatch();
   
    function wishlistItem(wishlist: Item) {
      dispatch(actions.addToWishList(wishlist));
    }
    const wishlist = useSelector((state: RootState) => state.product.wishlist);

    const inWishList = wishlist.find((wish: Item) => wish._id === productdata?._id);

  const url = `http://localhost:8080/products/${product.id}`;

  useEffect(() => {
    function getProductData() {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setProductData(data))
        .catch((error) => console.log(error));
    }
    getProductData();
  }, [url, product]);

  console.log(productdata);

  return (
    <div>
      <div className="emptyDiv"></div>
      <Card
        className="product-details-card"
        sx={{
          width: 1400,
          height: 900,
          boxShadow: "none",
          position: "relative",
        }}
      >
        <div>
          <CardActionArea>
            <Box>
              <CardMedia
                component="img"
                image={productdata?.productImg}
                alt={productdata?.title}
                sx={{
                  width: 550,
                  height: 550,
                  borderRadius: "25px",
                  zIndex: 0,
                }}
              />
            </Box>
          </CardActionArea>
        </div>
        <CardContent>
          <p className="product-details-header">{productdata?.title}</p>
          <p className="product-details-subheader">{productdata?.category}</p>
          <Rating
            initialValue={productdata?.rating}
            iconsCount={5}
            allowFraction={true}
            readonly={true}
            fillColor="rgb(226, 88, 60)"
            emptyColor="gray"
            size={40}
          />
          <p className="product-details-price">${productdata?.price}</p>
          {productdata?.badge && (
            <h3 className="product-details-price">
              {productdata?.badge.toLocaleUpperCase()}
            </h3>
          )}
          <p>{productdata?.description}</p>
          <p>
            $40 OFF your qualifying first order of $100+1 with a Homehop credit
            card. Valid till 12/2023.
          </p>
          <CardActions>
            <FavoriteIcon
              sx={{ width: 40, height: 40 }}
              onClick={() => wishlistItem(productdata!)}
              color={inWishList ? "error" : "action"}
            />
            {inWishList ? <p>Remove from wishlist</p> : <p> Add to wishlist</p>}

            <button aria-label="share" className="cart-btn-addtocart">
              <ShoppingCartOutlinedIcon sx={{ width: 40, height: 40 }} />
              <p className="cart-text">Add to Cart</p>
            </button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
