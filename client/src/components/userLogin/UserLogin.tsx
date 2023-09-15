import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./UserLogin.css";
import { actions } from "../../redux/slice/user";

export default function UserLogin() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, email: event.target.value });
  }

  function getUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, password: event.target.value });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onClickHandler() {
    const url = "https://backend-server-homeshop.onrender.com/users/login";

    axios
      .post(url, userInfo)
      .then((response) => {
        if (response.status === 200) {
          dispatch(actions.setUserdata(response.data.userData));
          const userToken = response.data.token;
          localStorage.setItem("userToken", userToken);
          navigate(`/products`);
        }
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          alert("Please sign up to continue");
          navigate(`/newUser`);
        }
        console.log(error);
      });
  }

  return (
    <div>
      <div className="login-container">
        <h1 className="login-header">Sign In</h1>
        <p>Enter your Email</p>
        <TextField
          required
          id="outlined-required"
          placeholder="Email address"
          sx={{ width: 500 }}
          onChange={getUserEmail}
        />
        <TextField
          required
          id="outlined-required"
          placeholder="Password"
          sx={{ width: 500, marginTop: 2 }}
          onChange={getUserPassword}
        />
        <Button
          onClick={onClickHandler}
          sx={{
            width: 500,
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
          Continue
        </Button>
        <p className="login-terms">
          By continuing, you agree to Homeshop's
          <a href="/termsofuse">Terms of Use</a> and
          <a href="/privacy">Privacy Notice</a>.
        </p>
      </div>
      <div>
        <fieldset className="title">
          <legend>New to Homeshop?</legend>
        </fieldset>
        <Link to={"/newUser"}>
          <button className="login-btn">Create your Homeshop account</button>
        </Link>
      </div>
    </div>
  );
}
