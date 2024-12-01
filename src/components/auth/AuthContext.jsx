import React, { useState } from "react";
import Login from "./login/Login";
import style from "./authContext.module.css";
import Signup from "./signup/Signup";

const AuthContext = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <div className={style["auth-context"]}>
      <h1>facebook</h1>
      <div
        className={`${style["auth-modal"]} ${
          style[isRegistered ? "login" : "signup"]
        }`}
      >
        {isRegistered ? (
          <Login setIsRegistered={setIsRegistered} />
        ) : (
          <Signup setIsRegistered={setIsRegistered} />
        )}
      </div>
    </div>
  );
};

export default AuthContext;
