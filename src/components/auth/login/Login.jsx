import React, { useState } from "react";
import style from "./login.module.css";
import { usePostContext } from "../../../context/postContext";

const Login = ({ setIsRegistered }) => {
  const { state, dispatch } = usePostContext();

  const [loginData, setLoginData] = useState({
    mobileEmailInput: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChangeInput = (e) => {
    setError("");
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!state.users.length) {
      setError("Please create an account first before logging in.");
      return;
    }
    const userExists = state.users.find(
      (user) =>
        user.mobileEmail === loginData.mobileEmailInput &&
        user.password === loginData.password
    );

    if (userExists) {
      dispatch({
        type: "LOG_IN",
        payload: userExists,
      });
      console.log("Login successful");
    } else {
      console.log("invalid login detail");
      setError("Please enter valid email address and password");
    }
  };
  return (
    <>
      <div className={style["modal-body"]}>
        <h2>Log in to Facebook</h2>
        <form onSubmit={handleFormSubmit}>
          <div className={style["input-group"]}>
            <input
              onChange={handleChangeInput}
              type="text"
              name="mobileEmailInput"
              id="mobileEmailInput"
              placeholder="Enter address or phone number"
              aria-label="Mobile or Email Input"
              value={loginData.mobileEmailInput}
              autoComplete={loginData.mobileEmailInput}
              required
            />
          </div>
          <div className={style["input-group"]}>
            <input
              onChange={handleChangeInput}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              aria-label="password"
              value={loginData.password}
              autoComplete={loginData.password}
              required
            />
          </div>
          <button type="submit">Log in</button>
          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        </form>
      </div>
      <div className={style["modal-footer"]}>
        <button type="button" onClick={() => setIsRegistered(false)}>
          Create new account
        </button>
      </div>
    </>
  );
};

export default Login;
