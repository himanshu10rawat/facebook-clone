import React, { useState } from "react";
import style from "./login.module.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    mobileEmailInput: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChangeInput = (e) => {
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
    console.log("loginFormData", loginFormData);
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
              required
            />
            {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
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
        </form>
      </div>
      <div className={style["modal-footer"]}>
        <button type="button">Create new account</button>
      </div>
    </>
  );
};

export default Login;
