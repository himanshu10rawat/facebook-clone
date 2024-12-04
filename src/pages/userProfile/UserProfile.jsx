import React from "react";
import Profile from "../../components/profileComponent/Profile";
import style from "./userProfile.module.css";
import { Outlet } from "react-router";

const UserProfile = () => {
  return (
    <>
      <Profile />
      <div className={style["profile-tab-items"]}>
        <Outlet />
      </div>
    </>
  );
};

export default UserProfile;
