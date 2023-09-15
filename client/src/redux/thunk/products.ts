import { AppDispatch } from "../store";
import { actions } from "../slice/products";
import { Item } from "../../types/types";

const productsApiUrl = "https://backend-server-homeshop.onrender.com/products";

export function fetchdata() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productsApiUrl);
    const productData = await response.json();
    dispatch(actions.productData(productData));
  };
}
