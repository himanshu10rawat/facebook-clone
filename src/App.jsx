import React, { useContext } from "react";
import Header from "./components/headerComponent/Header";
import { Outlet } from "react-router";
import { PostContext } from "./context/postContext";
import AuthContext from "./components/auth/AuthContext";

const App = () => {
  const { login } = useContext(PostContext);
  return (
    <>
      {login.isLogin ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <AuthContext />
      )}
    </>
  );
};

export default App;
