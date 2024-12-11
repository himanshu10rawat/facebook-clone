import React from "react";
import Post from "../PostComponent/Post";
import style from "./postList.module.css";

const PostList = ({ data }) => {
  return (
    <>
      <div className={style["post-list"]}>
        {data.posts.map((list, index) => (
          <Post postlist={list} key={index} user={data} />
        ))}
      </div>
    </>
  );
};

export default PostList;
