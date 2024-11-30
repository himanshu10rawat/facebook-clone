import React from "react";
import { postData } from "../../database/postData";
import Post from "../PostComponent/Post";
import style from "./postList.module.css";

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
