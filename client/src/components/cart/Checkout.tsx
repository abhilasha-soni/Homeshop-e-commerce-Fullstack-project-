import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import CheckoutCard from './CheckoutCard';

export default function Checkout() {
    const cartList = useSelector ((state:RootState) => state.cart.cartList);
  return (
    <div>Checkout
       <div>
            <Grid container spacing={0}>
              {cartList.map((item) => {
                return (
                  <div key={item._id.toString()}>
                    <Grid item  xs>
                      <CheckoutCard key={item._id.toString()} item={item} />
                    </Grid>
                  </div>
                );
              })}
            </Grid>
            </div>
    </div>
  )
}
