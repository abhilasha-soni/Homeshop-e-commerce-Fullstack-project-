import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";

import "./UserLogin.css";
// import { actions } from "../../redux/slice/user";

export default function NewUser() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  function setUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, name: event.target.value });
  }

  function setUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, email: event.target.value });
  }

  function setUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, password: event.target.value });
  }

  const navigate = useNavigate();

  function onClickHandler() {
    const url =
      "https://backend-server-homeshop.onrender.com/users/registerUser";

    axios
      .post(url, userInfo)
      .then((response) => {
        if (response.status === 201) {
          navigate(`/login`);
        }
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    setUserInfo({ name: "", email: "", password: "" });
  }

  return (
    <div
      style={{
        marginTop: 150,
        padding: 50,
      }}
    >
      <div className="login-container">
        <h1 className="login-header">Create account</h1>
        <p>Your name</p>
        <TextField
          required
          id="outlined-required"
          placeholder="First and last name"
          sx={{ width: 500, marginBottom: 2 }}
          value={userInfo.name}
          onChange={setUserName}
        />
        <p>Email address</p>
        <TextField
          required
          id="outlined-required"
          placeholder="Email address"
          sx={{ width: 500, marginBottom: 2 }}
          value={userInfo.email}
          onChange={setUserEmail}
        />
        <p>Password</p>
        <TextField
          required
          id="outlined-required"
          placeholder="Password"
          sx={{ width: 500, marginBottom: 2 }}
          value={userInfo.password}
          onChange={setUserPassword}
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
          <legend>Already have an account?</legend>
        </fieldset>
        <Link to={"/login"}>
          <button className="login-btn">Sign in</button>
        </Link>
      </div>
    </div>
  );
}
