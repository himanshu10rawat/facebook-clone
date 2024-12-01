import React, { useContext, useEffect, useState } from "react";
import style from "./login.module.css";
import { PostContext } from "../../../context/postContext";

const Login = ({ setIsRegistered }) => {
  const { login } = useContext(PostContext);
  const { isLogin, setIsLogin } = login;
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
    const loginFormData = {
      ...loginData,
    };

    const registeredUsers = JSON.parse(localStorage.getItem("users"));
    const userExists = registeredUsers.find(
      (user) =>
        user.mobileEmail === loginData.mobileEmailInput &&
        user.password === loginData.password
    );

    console.log("userExists", userExists);

    if (userExists) {
      setIsLogin(true);
      console.log("Login successful");
    } else {
      setIsLogin(false);
      console.log("invalid detail");
      setError("Please enter valid email address and password");
    }
    console.log("loginFormData", loginFormData);
  };

  useEffect(() => {
    console.log("isLogin state updated:", isLogin);
  }, [isLogin]);
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
