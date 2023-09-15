import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "user/register",
  async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    const result = await axios.post(
      "https://backend-server-homeshop.onrender.com/users/registerUser",
      {
        name,
        email,
        password,
      }
    );
    return result.data;
  }
);
