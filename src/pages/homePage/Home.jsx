import React from "react";
import style from "./home.module.css";
import CreatePost from "../../components/createPostComponent/createPost";
import PostList from "../../components/postListComponent/PostList";

const Home = () => {
  return (
    <div className={style["home-page"]}>
      <aside></aside>
      <main>
        <CreatePost />
        <PostList />
      </main>
      <aside></aside>
    </div>
  );
};

export default Home;
