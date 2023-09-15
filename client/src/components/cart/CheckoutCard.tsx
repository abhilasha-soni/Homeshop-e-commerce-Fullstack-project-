import React, {useState} from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useDispatch } from 'react-redux';

import "./Cart.css";
import { Item, ProductOrder } from '../../types/types';
import { cartActions } from '../../redux/slice/cart';


type Prop = {
  item : ProductOrder;
};
export default function CheckoutCard({item}:Prop) {
  return (
    <div>CheckoutCard
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
        {/* <Typography>
          Total Amt: $ {itemValue(item.quantity, item.price)}
        </Typography> */}
      </Card>
    </div>
    </div>
  )
}
