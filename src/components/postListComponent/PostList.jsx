import React from "react";
import postlists from "../../postData.json";
import Post from "../PostComponent/Post";
import style from "./postList.module.css";

const PostList = () => {
  return (
    <>
      <div className={style["post-list"]}>
        {postlists.map((list, index) => (
          <Post postlist={list} key={index} />
        ))}
      </div>
    </>
  );
};

export default PostList;
