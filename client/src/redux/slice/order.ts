import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Order } from "../../types/types";

type InitialState = {
  orderList : Order[];
};

const initialState:InitialState = {
  orderList:[],
};

const orderSlice = createSlice ({
  name:"orders",
  initialState,
  reducers:{
    setOrderList: (state, actions:PayloadAction<Order[]>) => {
state.orderList = actions.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
