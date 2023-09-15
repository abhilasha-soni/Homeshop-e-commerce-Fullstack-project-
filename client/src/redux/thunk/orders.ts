import axios from "axios";

import { orderActions } from "../slice/order";
import { AppDispatch } from "../store";

export function fetchOrderData(userId: string) {
  const orderUrl = `https://backend-server-homeshop.onrender.com/orders/${userId}`;
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(orderUrl);
    const orderList = await response.data;
    dispatch(orderActions.setOrderList(orderList));
  };
}
