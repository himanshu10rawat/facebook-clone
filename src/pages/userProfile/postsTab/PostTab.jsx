import React from "react";
import style from "./postTab.module.css";
import CreatePost from "../../../components/createPostComponent/CreatePost";
import PostList from "../../../components/postListComponent/PostList";
import PostGallery from "../../../components/postGalleryComponent/PostGallery";
import PostIntro from "../../../components/postIntroComponent/PostIntro";
import PostFriends from "../../../components/postFriendsComponent/PostFriends";
import { usePostContext } from "../../../context/postContext";
import { useParams } from "react-router";

const PostTab = () => {
  const { userId } = useParams();
  const { state } = usePostContext();
  const { users } = state;

  const currentUser = users.find((user) => user.userId === userId);

  return (
    <div className={style["profile-post"]}>
      <aside className={style["user-info"]}>
        <PostIntro user={currentUser} />
        <PostGallery />
        <PostFriends />
      </aside>
      <section className={style["user-post"]}>
        <CreatePost />
        <PostList user={currentUser} />
      </section>
    </div>
  );
};

export default PostTab;
