import React, { useEffect, useRef, useState } from "react";
import style from "./postTab.module.css";
import CreatePost from "../../../components/createPostComponent/createPost";
import PostList from "../../../components/postListComponent/PostList";
import PostGallery from "../../../components/postGalleryComponent/PostGallery";
import PostIntro from "../../../components/postIntroComponent/PostIntro";
import PostFriends from "../../../components/postFriendsComponent/PostFriends";
import { usePostContext } from "../../../context/postContext";
import { useParams } from "react-router";

const PostTab = () => {
  const userInfo = useRef();
  const [userHeight, setUserHeight] = useState(0);
  const { userId } = useParams();
  const { state } = usePostContext();
  const { users } = state;

  const currentUser = users.find((user) => user.userId === userId);

  useEffect(() => {
    const updateHeight = () => {
      if (userInfo.current) {
        setUserHeight(userInfo.current.offsetHeight);
      }
    };

    // Initialize height
    updateHeight();

    // Create a ResizeObserver instance
    const observer = new ResizeObserver(() => {
      updateHeight(); // Update height when the element's size changes
    });

    if (userInfo.current) {
      observer.observe(userInfo.current);
    }

    // Cleanup on unmount
    return () => {
      if (userInfo.current) {
        observer.unobserve(userInfo.current);
      }
    };
  }, []);

  return (
    <div className={style["profile-post"]}>
      <div ref={userInfo} className={style["user-info"]}>
        <PostIntro />
        <PostGallery />
        <PostFriends />
      </div>
      <div
        style={{ maxHeight: `${userHeight}px` }}
        className={style["user-post"]}
      >
        <CreatePost />
        <PostList data={currentUser} />
      </div>
    </div>
  );
};

export default PostTab;
