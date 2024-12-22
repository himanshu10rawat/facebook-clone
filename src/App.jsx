import React, { useEffect } from "react";
import Header from "./components/headerComponent/Header";
import { Outlet } from "react-router";
import AuthContext from "./components/auth/AuthContext";
import { usePostContext } from "./context/postContext";

const App = () => {
  const { state, dispatch } = usePostContext();

  useEffect(() => {
    const userExists = state.users.find(
      (user) =>
        user.mobileEmail === state.user.mobileEmail &&
        user.password === state.user.password
    );

    if (userExists) {
      dispatch({
        type: "LOG_IN",
        payload: userExists,
      });
    }
  }, [state.users]);

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
