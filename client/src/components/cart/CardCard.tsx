import React, {useState} from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from 'react-redux';

import "./Cart.css";
import { Item, ProductOrder } from '../../types/types';
import { cartActions } from '../../redux/slice/cart';


type Prop = {
  item : ProductOrder;
};

export default function CardCard({item}:Prop) {
  const dispatch = useDispatch();

function increment (item:Item){
  dispatch (cartActions.increment(item));
}

function decrement (item:Item){
  dispatch (cartActions.decrement(item));
}

function deleteItem (item:Item){
  dispatch (cartActions.deleteItem(item));
}

function itemValue (qty:number, price:number): number{
  return qty * price ;
}

  return (
    <div>
      <Card className="cart-item" sx={{ width: 1500, height: 150 }}>
        <CardMedia
          component="img"
          image={item.productImg}
          alt={item.title}
          sx={{ width: 150, height: 150 }}
        />
        <CardContent className="cart-content">
          <Typography>{item.title}</Typography>
          <Typography>Price: $ {item.price}</Typography>
        </CardContent>
        <CardActions>
          <Button
            aria-label="share"
            variant="contained"
            className="cart-btn-addtocart-add"
            sx={{ backgroundColor: "rgb(226, 88, 60)" }}
            onClick={() => increment(item)}
          >
            <AddIcon />
          </Button>

          <p className="cart-text-add">{item.quantity}</p>

          <Button
            aria-label="share"
            variant="contained"
            className="cart-btn-addtocart-add"
            sx={{ backgroundColor: "rgb(226, 88, 60)" }}
            onClick={() => decrement(item)}
          >
            <RemoveIcon />
          </Button>
        </CardActions>
        <Typography>
          Total Amt: $ {itemValue(item.quantity, item.price)}
        </Typography>

        <Button
          aria-label="share"
          variant="contained"
          className="cart-btn-addtocart-add"
          sx={{ backgroundColor: "rgb(226, 88, 60)" }}
          onClick={() => {
            deleteItem(item);
          }}
        >
          <DeleteIcon />
        </Button>
      </Card>
    </div>
  );
}
