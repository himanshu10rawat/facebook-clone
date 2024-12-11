import React, { useContext, useState } from "react";
import style from "./postForm.module.css";
import { IoMdClose } from "react-icons/io";
import {
  FaUserFriends,
  FaUserTag,
  FaRegSmile,
  FaUserCircle,
} from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiFaceSmile } from "react-icons/ci";
import { MdAddToPhotos, MdPhotoLibrary } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { usePostContext } from "../../context/postContext";
import { Link } from "react-router";

const PostForm = ({ setOpenPostModal, mediaOpen, setMediaOpen }) => {
  const { state, dispatch } = usePostContext();

  const [formData, setFormData] = useState({
    postCaption: "",
  });
  const [previewImage, setPreviewImage] = useState("");

  const loginUser = state.users.find(
    (user) => user.userId === state.user.userId
  );

  const imageHandleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreviewImage("");
    setMediaOpen(false);
  };

  const handleCloseModal = () => {
    setOpenPostModal(false);
  };

  const handleOpenMedia = () => {
    setMediaOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      title: formData.postCaption,
      postImage: previewImage && previewImage,
      date: new Date().toLocaleDateString(),
    };

    dispatch({
      type: "ADD_POST",
      payload: {
        userId: loginUser.userId, // User identify karne ke liye
        posts: [...(loginUser.posts || []), post], // Updated posts array
      },
    });

    setFormData({ postCaption: "" });
    setPreviewImage("");
    setMediaOpen(false);
    setOpenPostModal(false);
    console.log("post", post);
  };
  return (
    <div className={style["modal-wrapper"]}>
      <div className={style["post-modal"]}>
        <div className={style["modal-header"]}>
          <h2>Create Post</h2>
          <span
            role="button"
            tabIndex={0}
            aria-label="Close Modal"
            className={style["modal-close"]}
            onClick={handleCloseModal}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCloseModal();
              }
            }}
          >
            <IoMdClose />
          </span>
        </div>
        <div className={style["modal-body"]}>
          <div className={style["profile-section"]}>
            <Link to={state.user.userId} className={style["profile-image"]}>
              {state.user.profilePic ? (
                <img
                  src={state.user.profilePic}
                  alt={`${state.user.firstName} profile picture`}
                />
              ) : (
                <FaUserCircle />
              )}
            </Link>
            <div className={style["profile-details"]}>
              <span className={style["username"]}>
                {state.user.firstName + " " + state.user.lastName}
              </span>
              <span
                className={style["share-with"]}
                role="button"
                tabIndex={0}
                aria-label="Share with options"
              >
                <FaUserFriends />
                Friends <TiArrowSortedDown />
              </span>
            </div>
          </div>
          <div className={style["post-form"]}>
            <form onSubmit={handleSubmit}>
              <div className={style["form-input-section"]}>
                <div className={style["input-group"]}>
                  <textarea
                    name="postCaption"
                    id="post-caption"
                    style={{ fontSize: `${!mediaOpen ? "24px" : "15px"}` }}
                    rows={!mediaOpen ? 4 : 1}
                    placeholder={`What's on your mind, ${state.user.firstName}?`}
                    aria-label="Post caption"
                    onChange={handleInputChange}
                    value={formData.postCaption}
                  ></textarea>
                  <span
                    className={style["emoji-button"]}
                    role="button"
                    tabIndex={0}
                    aria-label="Emoji"
                  >
                    <CiFaceSmile />
                  </span>
                </div>
                {mediaOpen && (
                  <div className={style["image-section"]}>
                    <span
                      className={style["image-remove-button"]}
                      role="button"
                      tabIndex={0}
                      aria-label="Remove image/images"
                      onClick={handleRemoveImage}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleRemoveImage();
                        }
                      }}
                    >
                      <IoMdClose />
                    </span>
                    {!previewImage ? (
                      <div className={style["dummy-image"]}>
                        <label htmlFor="media">
                          <span className={style["add-images-icon"]}>
                            <MdAddToPhotos />
                          </span>
                          <h2>Add Photos/Videos</h2>
                          <p>or drag and drop</p>
                        </label>
                        <input
                          type="file"
                          name="media"
                          id="media"
                          accept="image/*"
                          onChange={imageHandleChange}
                        />
                      </div>
                    ) : (
                      <div className={style["image-list"]}>
                        <div className={style["image"]}>
                          <img src={previewImage} alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className={style["add-more-section"]}>
                <span className={style["add-more-text"]}>Add More</span>
                <div className={style["add-more-options"]}>
                  <span
                    className={style["add-more-item"]}
                    onClick={handleOpenMedia}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleOpenMedia();
                      }
                    }}
                  >
                    <MdPhotoLibrary />
                  </span>
                  <span className={style["add-more-item"]}>
                    <FaUserTag />
                  </span>
                  <span className={style["add-more-item"]}>
                    <FaRegSmile />
                  </span>
                  <span className={style["add-more-item"]}>
                    <FaLocationDot />
                  </span>
                </div>
              </div>
              <button
                disabled={formData.postCaption || formData.media ? false : true}
                type="submit"
                className={style["post-button"]}
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
