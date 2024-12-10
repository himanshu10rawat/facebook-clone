import React from "react";
import Profile from "../../components/profileComponent/Profile";
import style from "./userProfile.module.css";
import { Outlet, useParams } from "react-router";
import { usePostContext } from "../../context/postContext";
import NotFound404 from "../../components/notFound404Component/NotFound404";

const UserProfile = () => {
  const { state } = usePostContext();

  const { userId } = useParams();

  const user = state.users.find((user) => user.userId === userId);

  if (!user) {
    return <NotFound404 />;
  }
  return (
    <>
      <Profile user={user} />
      <div className={style["profile-tab-items"]}>
        <Outlet />
      </div>
    </>
  );
};

export default UserProfile;
