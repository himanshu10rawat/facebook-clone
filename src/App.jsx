import React from "react";
import Header from "./components/headerComponent/Header";
import { Outlet } from "react-router";
import AuthContext from "./components/auth/AuthContext";
import { context } from "./context/postContext";

const App = () => {
  const { userContext } = context();
  const { user } = userContext;

  return (
    <>
      {user.firstName ? (
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
