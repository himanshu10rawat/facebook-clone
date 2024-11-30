import React from "react";
import Login from "./login/Login";
import style from "./authContext.module.css";
import Signup from "./signup/Signup";

const AuthContext = () => {
  return (
    <div className={style["auth-context"]}>
      <h1>facebook</h1>
      <div className={style["auth-modal"]}>
        {/* <Login /> */}
        <Signup />
      </div>
    </div>
  );
};

export default AuthContext;
