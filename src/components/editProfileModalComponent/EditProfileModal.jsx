import React, { useState } from "react";
import style from "./editProfileModal.module.css";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt, FaUser } from "react-icons/fa";
import { usePostContext } from "../../context/postContext";

const EditProfileModal = ({ setEditProfile, profilePic }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const { state, dispatch } = usePostContext();

  const currentUser = state.users.find(
    (loginUser) => loginUser.userId === state.user.userId
  );

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setIsImageLoading(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = { ...currentUser, profilePic: previewImage };
    dispatch({
      type: "ADD_PROFILE_PIC",
      payload: updatedUserData,
    });
    setEditProfile(false);
    setPreviewImage(null);
  };

  return (
    <div className={style["edit-profile"]}>
      <div className={style["modal"]}>
        <div className={style["modal-header"]}>
          <h2>Choose profile picture</h2>
          <span
            role="button"
            tabIndex={0}
            aria-label="Close modal"
            className={style["close-modal"]}
            onClick={() => setEditProfile(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setEditProfile(false);
              }
            }}
          >
            <IoMdClose />
          </span>
        </div>
        <div className={style["modal-body"]}>
          <div className={style["profile-pic"]}>
            {isImageLoading && <h2 className={style["loader"]}>Loading...</h2>}
            {previewImage || profilePic ? (
              <img
                src={previewImage || profilePic}
                alt="Preview picture"
                onLoad={() => setIsImageLoading(false)}
                onError={() => setIsImageLoading(false)}
                style={{ display: isImageLoading ? "none" : "block" }}
              />
            ) : (
              <FaUser className={style["profile-pic-placeholder"]} />
            )}
          </div>
          <form className={style["edit-profile-form"]} onSubmit={handleSubmit}>
            <div className={style["input-group"]}>
              <label htmlFor="profilePic">
                <FaCloudUploadAlt /> Upload Photo
              </label>
              <input
                onChange={handleChange}
                type="file"
                name="profilePic"
                id="profilePic"
                accept="image/*"
              />
            </div>
            <div className={style["action-button"]}>
              <button
                type="reset"
                onClick={() => {
                  setEditProfile(false);
                  setPreviewImage(null);
                }}
              >
                Cancel
              </button>
              <button type="submit" disabled={!previewImage && true}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
