import React, { useEffect, useState } from "react";
import style from "./createPost.module.css";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegSmile, FaUserCircle } from "react-icons/fa";
import PostForm from "../postFormComponent/PostForm";
import useDisableScroll from "../../hooks/useDisableScroll";
import { usePostContext } from "../../context/postContext";
import { Link } from "react-router";

const CreatePost = () => {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const { state } = usePostContext();

  const handleClickCaption = () => {
    setOpenPostModal(true);
  };

  const handleClickMedia = () => {
    setOpenPostModal(true);
    setMediaOpen(true);
  };

  useDisableScroll(openPostModal);
  return (
    <>
      <div className={style["post-section"]}>
        <div className={style["only-post"]}>
          <Link
            to={`/${state.user.userId}`}
            className={style["profile-picture"]}
          >
            {state.user.profilePic ? (
              <img src={state.user.profilePic} alt="User Profile Picture" />
            ) : (
              <FaUserCircle />
            )}
          </Link>
          <span
            className={style["write-post-button"]}
            role="button"
            tabIndex={0}
            aria-label="Post"
            onClick={handleClickCaption}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClickCaption();
              }
            }}
          >
            What's on your mind, {state.user.firstName && state.user.firstName}?
          </span>
        </div>
        <div className={style["post-with-media"]}>
          <span role="button" tabIndex={0} aria-label="Live video">
            <RiLiveFill />
            Live video
          </span>
          <span
            role="button"
            tabIndex={0}
            aria-label="Photo/Video"
            onClick={handleClickMedia}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleClickMedia();
              }
            }}
          >
            <MdPhotoLibrary />
            Photo/Video
          </span>
          <span role="button" tabIndex={0} aria-label="Feeling/Activity">
            <FaRegSmile />
            Feeling/Activity
          </span>
        </div>
      </div>
      {openPostModal && (
        <PostForm
          setOpenPostModal={setOpenPostModal}
          mediaOpen={mediaOpen}
          setMediaOpen={setMediaOpen}
        />
      )}
    </>
  );
};

export default CreatePost;
