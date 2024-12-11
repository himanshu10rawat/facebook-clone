import React from "react";
import style from "./home.module.css";
import CreatePost from "../../components/createPostComponent/createPost";
import PostList from "../../components/postListComponent/PostList";
import { usePostContext } from "../../context/postContext";

const Home = () => {
  const { state } = usePostContext();
  const { users } = state;

  return (
    <div className={style["home-page"]}>
      <aside></aside>
      <main>
        <CreatePost />
        {users.map((singleUser, index) => (
          <PostList key={index} data={singleUser} />
        ))}
      </main>
      <aside></aside>
    </div>
  );
};

export default Home;
