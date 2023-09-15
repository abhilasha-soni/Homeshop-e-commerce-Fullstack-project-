import {PayloadAction, createSlice} from "@reduxjs/toolkit";

import {Item} from "../../types/types";

type InitialState = {
  products: Item[];
  isLoading: boolean;
  wishlist: Item[];
  department: Item[];
  searchResult: Item[];
  search: string;
  productDetails:null | Item;
}

const initialState: InitialState = {
products: [],
isLoading: true,
wishlist: [],
department: [],
searchResult: [],
search: "",
productDetails:null,
}

const productSlice = createSlice ({
  name: "productList",
  initialState,
  reducers: {
    productData: (state, actions:PayloadAction<Item[]>)=>{state.products = actions.payload;
    state.isLoading = false; 
  },
  productDetails: (state, actions: PayloadAction<Item>)=>{
    state.productDetails = actions.payload;
  },

    productDepartment: (state, actions:PayloadAction<Item[]>)=>{state.department = actions.payload;
    state.isLoading = false; 
  },


  addToWishList: (state, actions:PayloadAction<Item>)=>{
    const wishListItem = state.wishlist.some((item)=>item._id === actions.payload._id);
    if (wishListItem){
      state.wishlist = state.wishlist.filter((item)=>item._id !== actions.payload._id);
    }else{
      state.wishlist.push(actions.payload);
    }
  },
  searchItem: (state, actions:PayloadAction<string>)=>{
    const result = state.products.filter((item)=>item.title.toLowerCase().includes(actions.payload.toLowerCase())
    );
    state.products = result;
  },
  },
});

export const actions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;