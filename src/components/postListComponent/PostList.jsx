import React from "react";
import Post from "../PostComponent/Post";
import style from "./postList.module.css";

const PostList = ({ user }) => {
  return (
    <>
      <div className={style["post-list"]}>
        {user.posts
          .map((list, index) => (
            <Post postlist={list} key={index} user={user} />
          ))
          .reverse()}
      </div>
    </>
  );
};

export default PostList;
