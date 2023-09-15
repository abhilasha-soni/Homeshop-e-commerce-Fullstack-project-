import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import { RootState } from "../../redux/store";
import { actions } from "../../redux/slice/user";

export default function AccountUpdate() {
  const dispatch = useDispatch();
  const userDetail = useSelector((state: RootState) => state.user.userInfo);

  const [formData, setFormData] = useState({ name: userDetail?.name });

  const [readOnly, setReadOnly] = useState(true);

  function setUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, name: event.target.value });
  }

  function onEditHandler() {
    setReadOnly(false);
  }

  function onSubmitHandler() {
    const token = localStorage.getItem("userToken");

    const url = `https://backend-server-homeshop.onrender.com/users/${userDetail?._id}`;

    axios
      .put(url, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response, "new data");
        dispatch(actions.setUserdata(response.data));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("Please log in to change your information");
          return;
        }
      });
    setReadOnly(true);
  }

  return (
    <div>
      <div
        style={{
          marginTop: 150,
          padding: 50,
        }}
      ></div>
      <h1>Account Update</h1>
      <TextField
        required
        id="outlined-required"
        placeholder="First and last name"
        sx={{ width: 500, marginBottom: 2 }}
        value={formData.name}
        onChange={setUserName}
        InputProps={{ readOnly: readOnly }}
      />
      <br />
      <br />
      <Button
        onClick={onEditHandler}
        sx={{
          width: 300,
          height: 45,
          marginTop: 4,
          marginBottom: 6,
          borderRadius: 2,
          borderWidth: 0,
          backgroundColor: "rgb(226, 88, 60)",
          color: "white",
          fontSize: 20,
          marginRight: 10,
        }}
      >
        Edit
      </Button>
      <Button
        onClick={onSubmitHandler}
        sx={{
          width: 300,
          height: 45,
          marginTop: 4,
          marginBottom: 6,
          borderRadius: 2,
          borderWidth: 0,
          backgroundColor: "rgb(226, 88, 60)",
          color: "white",
          fontSize: 20,
          marginRight: 10,
        }}
      >
        Submit
      </Button>
      <Link to={"/orders"}>
        <Button
          sx={{
            width: 300,
            height: 45,
            marginTop: 4,
            marginBottom: 6,
            borderRadius: 2,
            borderWidth: 0,
            backgroundColor: "rgb(226, 88, 60)",
            color: "white",
            fontSize: 20,
          }}
        >
          My Orders
        </Button>
      </Link>
    </div>
  );
}
