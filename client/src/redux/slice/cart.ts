import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { actions } from "./products";
import { Item, ProductOrder} from "../../types/types";

type Cart = {
  cartItems: Item;
  quantity: number;
};

type InitialState = {
  cartList: ProductOrder[];
};

const initialState : InitialState = {
  cartList:[],
};

const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers:{
    addToCart: (state, actions:PayloadAction<Item>) => {
      const cartItem = state.cartList.find(
        (item)=> item._id === actions.payload._id
      );
      if (cartItem){
        cartItem.quantity += 1;
      } else{
        state.cartList.push({
          ...actions.payload, quantity:1
        });
      }
    },

    increment :(state, actions:PayloadAction<Item>) => {
      const addItem : any = state.cartList.find((product)=> product._id === actions.payload._id);
      addItem.quantity ++;
        },

        decrement : (state, actions:PayloadAction<Item>) => {
          const subtractItem : any = state.cartList.find((product)=> product._id === actions.payload._id);
          if (subtractItem.quantity === 1){
            subtractItem.quantity = 1
          } else {
            subtractItem.quantity --;
          }
        },
        deleteItem: (state, actions:PayloadAction<Item>)=> {
          const deleteItem = state.cartList.filter((item)=> item._id !== actions.payload._id);
          state.cartList = deleteItem;
        },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;