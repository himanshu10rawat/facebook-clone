import React, { useEffect, useRef, useState } from "react";
import style from "./postIntro.module.css";
import { Link } from "react-router";
import { FaHeart, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { usePostContext } from "../../context/postContext";

const CHARACTER_LIMIT = 101;

const PostIntro = ({ user }) => {
  const [bio, setBio] = useState(user.bio || "");
  const [bioEditActive, setBioEditActive] = useState(false);
  const [isInputChange, setIsInputChange] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(
    CHARACTER_LIMIT - (user.bio?.length || 0)
  );
  const textareaRef = useRef(null);
  const { state, dispatch } = usePostContext();

  const isActiveUser = state.user.userId === user.userId;

  const setCursorToEnd = () => {
    if (textareaRef.current) {
      const length = bio.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  };

  useEffect(() => {
    if (bioEditActive) {
      setCursorToEnd();
    }
  }, [bioEditActive]);

  const handleTextareaChange = (e) => {
    const newBio = e.target.value;

    if (newBio.length > CHARACTER_LIMIT) return;

    setCharacterLimit(CHARACTER_LIMIT - newBio.length);
    setBio(newBio);

    setIsInputChange(newBio !== user.bio);
  };

  const handleBioSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "BIO_ADD",
      payload: { ...user, bio },
    });
    setBioEditActive(false);
    setIsInputChange(false);
  };

  const handleCancel = () => {
    setBioEditActive(false);
    setBio(user.bio || "");
    setIsInputChange(false);
  };

  return (
    <div className={style["profile-intro"]}>
      <h2>Intro</h2>
      <div className={style["bio-details"]}>
        {user.bio && !bioEditActive && (
          <p className={style["bio"]}>{user.bio}</p>
        )}
        {isActiveUser &&
          (!bioEditActive ? (
            <div
              onClick={() => {
                setBioEditActive(true);
                setBio(user.bio || "");
              }}
              role="button"
              tabIndex={0}
              aria-label="Edit bio"
              className={style["edit-button"]}
            >
              Edit Bio
            </div>
          ) : (
            <form onSubmit={handleBioSubmit}>
              <textarea
                ref={textareaRef}
                autoFocus
                onChange={handleTextareaChange}
                value={bio}
                aria-label="Describe who you are"
                rows={3}
                name="bio"
                id="bio"
                placeholder="Describe who you are"
                className={style["user-bio"]}
              ></textarea>
              <div className={style["bio-input-character-remaining"]}>
                {characterLimit} characters remaining
              </div>
              <div className={style["action-button"]}>
                <button aria-label="cancel" type="reset" onClick={handleCancel}>
                  Cancel
                </button>
                <button
                  aria-label="save"
                  type="submit"
                  disabled={!isInputChange}
                >
                  Save
                </button>
              </div>
            </form>
          ))}
      </div>
      <div className={style["personal-details"]}>
        <ul>
          <li>
            <FaHome />
            Lives in <Link>Delhi, India</Link>
          </li>
          <li>
            <FaLocationDot />
            From <Link>Delhi, India</Link>
          </li>
          <li>
            <FaHeart />
            Single
          </li>
          <li>
            <MdAccessTimeFilled />
            Joined on November 2015
          </li>
        </ul>
        {isActiveUser && (
          <div
            role="button"
            tabIndex={0}
            aria-label="Edit details"
            className={style["edit-button"]}
          >
            Edit details
          </div>
        )}
      </div>
    </div>
  );
};

export default PostIntro;
