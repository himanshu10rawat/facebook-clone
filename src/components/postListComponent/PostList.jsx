import React from "react";
import Post from "../PostComponent/Post";
import style from "./postList.module.css";
import { postData } from "../../database/postData";

const PostList = () => {
  return (
    <>
      <div className={style["post-list"]}>
        {postData.map((list, index) => (
          <Post postlist={list} key={index} />
        ))}
      </div>
    </>
  );
};

export default PostList;
