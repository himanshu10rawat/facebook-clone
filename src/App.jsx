import React from "react";
import Header from "./components/headerComponent/Header";
import { Outlet } from "react-router";
import AuthContext from "./components/auth/AuthContext";
import { usePostContext } from "./context/postContext";

const App = () => {
  const { state } = usePostContext();

  return (
    <>
      {state.user.userId ? (
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
