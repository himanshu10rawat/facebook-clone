import React from "react";
import Header from "./components/headerComponent/Header";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
