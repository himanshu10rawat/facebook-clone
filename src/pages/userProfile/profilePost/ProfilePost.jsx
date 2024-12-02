import React from "react";
import style from "./profilePost.module.css";
import CreatePost from "../../../components/createPostComponent/createPost";
import PostList from "../../../components/postListComponent/PostList";
import ProfileIntro from "../../../components/profileIntroComponent/ProfileIntro";

const ProfilePost = () => {
  return (
    <div className={style["profile-post"]}>
      <div className={style["user-info"]}>
        <ProfileIntro />
      </div>
      <div className={style["user-post"]}>
        <CreatePost />
        <PostList />
      </div>
    </div>
  );
};

export default ProfilePost;
