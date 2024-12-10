import React from "react";
import style from "./notFound404.module.css";
import { Link } from "react-router";

const NotFound404 = () => {
  return (
    <div className={style["not-found"]}>
      <h1>404</h1>
      <p>Page not found!</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound404;
