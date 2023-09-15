import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Rating } from "react-simple-star-rating";
import { Card, CardActionArea, CardActions, CardMedia } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";

import { Item } from "../../types/types";
import { actions } from "../../redux/slice/products";
import { cartActions } from "../../redux/slice/cart";
import "./Product.css";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

type Prop = {
  item: Item;
};
export default function ChildModal({ item }: Prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 const dispatch = useDispatch();

 function cartItems(cartItem: Item) {
   dispatch(cartActions.addToCart(cartItem));
 }

function wishlistItem(wishlist: Item) {
  dispatch(actions.addToWishList(wishlist));
}
const wishlist = useSelector((state: RootState) => state.product.wishlist);

const inWishList = wishlist.find((wish: Item) => wish._id === item?._id);
  return (
    <React.Fragment>
      <Button
        onClick={handleOpen}
        sx={{
          position: "absolute",
          top: 150,
          left: 100,
          display: "none",
          width: 150,
          height: 70,
          backgroundColor: "white",
          color: "rgb(226, 88, 60)",
          borderStyle: "solid",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "rgb(226, 88, 60)",
          zIndex: 1,
        }}
      >
        Quick View
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Card
          className="product-details-card"
          sx={{ ...style, width: 1000, height: 450 }}
        >
          <div>
            <CardActionArea>
              <Box>
                <h2 className="product-details-header">{item.title}</h2>
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
                <Rating
                  initialValue={item.rating}
                  iconsCount={5}
                  allowFraction={true}
                  readonly={true}
                  fillColor="rgb(226, 88, 60)"
                  emptyColor="gray"
                  size={40}
                />
              </Box>
            </CardActionArea>
          </div>
          <div>
            <Button onClick={handleClose}>Close</Button>
            <p className="product-details-price">${item.price}</p>
            {item.badge && (
              <h3 className="product-details-price">
                {item.badge.toLocaleUpperCase()}
              </h3>
            )}
            <CardActions className="quick-view-button">
              <div className="quick-view-fav">
                <FavoriteIcon
                  sx={{ width: 40, height: 40 }}
                  onClick={() => wishlistItem(item!)}
                  color={inWishList ? "error" : "action"}
                />
                {inWishList ? (
                  <p>Remove from wishlist</p>
                ) : (
                  <p> Add to wishlist</p>
                )}
              </div>

              <button
                aria-label="share"
                className="cart-btn-addtocart" onClick={() => cartItems(item)}
              >
                <ShoppingCartOutlinedIcon sx={{ width: 40, height: 40 }} />
                <p className="cart-text">Add to Cart</p>
              </button>
            </CardActions>
          </div>
        </Card>
      </Modal>
    </React.Fragment>
  );
}

