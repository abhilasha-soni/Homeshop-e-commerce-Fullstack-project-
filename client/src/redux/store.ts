import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slice/products";
import { useDispatch } from "react-redux";
import cartReducer from "./slice/cart";
import userReducer from "./slice/user";
import orderReducer from "./slice/order";


const store = configureStore({
  reducer:{
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;