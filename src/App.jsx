import React from "react";
import Header from "./components/headerComponent/Header";
import { Outlet } from "react-router";
import { PostProvider } from "./context/postContext";
import AuthContext from "./components/auth/AuthContext";

const App = () => {
  return (
    <>
      {/* <PostProvider>
        <Header />
        <Outlet />
      </PostProvider> */}
      <AuthContext />
    </>
  );
};

export default App;
