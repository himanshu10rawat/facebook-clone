import { useState } from "react";
import style from "./createPost.module.css";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegSmile, FaUserCircle } from "react-icons/fa";
import PostForm from "../postFormComponent/PostForm";
import useDisableScroll from "../../hooks/useDisableScroll";
import { usePostContext } from "../../context/postContext";
import { Link } from "react-router";
import { runOnKeyboardAction } from "../../utils/feedback";

const CreatePost = () => {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [openPostModal, setOpenPostModal] = useState(false);
  const [postMode, setPostMode] = useState("post");
  const { state } = usePostContext();

  const handleClickCaption = () => {
    setPostMode("post");
    setOpenPostModal(true);
  };

  const handleClickMedia = () => {
    setPostMode("post");
    setOpenPostModal(true);
    setMediaOpen(true);
  };

  const handleClickLive = () => {
    setPostMode("live");
    setOpenPostModal(true);
    setMediaOpen(true);
  };

  const handleClickFeeling = () => {
    setPostMode("feeling");
    setOpenPostModal(true);
    setMediaOpen(false);
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
            What&apos;s on your mind, {state.user.firstName && state.user.firstName}?
          </span>
        </div>
        <div className={style["post-with-media"]}>
          <span
            role="button"
            tabIndex={0}
            aria-label="Live video"
            onClick={handleClickLive}
            onKeyDown={(event) => runOnKeyboardAction(event, handleClickLive)}
          >
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
          <span
            role="button"
            tabIndex={0}
            aria-label="Feeling/Activity"
            onClick={handleClickFeeling}
            onKeyDown={(event) =>
              runOnKeyboardAction(event, handleClickFeeling)
            }
          >
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
          initialMode={postMode}
        />
      )}
    </>
  );
};

export default CreatePost;
