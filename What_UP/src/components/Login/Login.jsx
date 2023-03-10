import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="login">
        <div className="login_container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3767/3767236.png"
            alt="google"
          />
          <div className="login_text">
            <h1> Sign in to WhatUP </h1>
          </div>

          <Button onClick={signIn}>Sign In With Google</Button>
        </div>
      </div>
    </>
  );
}

export default Login;
