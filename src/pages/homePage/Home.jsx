import React from "react";
import style from "./home.module.css";
import CreatePost from "../../components/createPostComponent/createPost";
import Post from "../../components/PostComponent/Post";

const Home = () => {
  return (
    <div className={style["home-page"]}>
      <aside></aside>
      <main>
        <CreatePost />
        <Post />
      </main>
      <aside></aside>
    </div>
  );
};

export default Home;
