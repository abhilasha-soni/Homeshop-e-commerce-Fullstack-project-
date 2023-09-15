

import {PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { registerUser } from "../thunk/users";
import { User } from "../../types/types";


type InitialState = {
  userInfo : User | null;
  isAuthenticated : boolean;
}

const initialState: InitialState = {
  userInfo : null,
isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    addUser: (state, actions)=>{
      state.isAuthenticated = true
    },
    setUserdata : (state, actions:PayloadAction<User>)=> {
      state.userInfo = actions.payload;
    }
  }

})

export const actions = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;