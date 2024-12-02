import React from "react";
import Profile from "../../components/profileComponent/Profile";
import ProfilePost from "./profilePost/ProfilePost";
import style from "./userProfile.module.css";

const UserProfile = () => {
  return (
    <>
      <Profile />
      <div className={style["profile-tab-items"]}>
        <ProfilePost />
      </div>
    </>
  );
};

export default UserProfile;
