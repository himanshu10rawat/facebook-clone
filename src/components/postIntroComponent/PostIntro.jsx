import React, { useState } from "react";
import style from "./postIntro.module.css";
import { Link } from "react-router";
import { FaHeart, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { usePostContext } from "../../context/postContext";

const PostIntro = ({ user }) => {
  console.log("user", user);

  const [bio, setBio] = useState("");
  const [bioEditActive, setBioEditActive] = useState(false);
  const { dispatch } = usePostContext();

  const handleBioSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "BIO_ADD",
      payload: { ...user, bio },
    });
    setBioEditActive(false);
  };
  return (
    <div className={style["profile-intro"]}>
      <h2>Intro</h2>
      <div className={style["bio-details"]}>
        {user.bio && !bioEditActive && (
          <p className={style["bio"]}>{user.bio}</p>
        )}
        {!bioEditActive && (
          <div
            onClick={() => setBioEditActive(true)}
            role="button"
            tabIndex={0}
            aria-label="Edit bio"
            className={style["edit-button"]}
          >
            Edit Bio
          </div>
        )}
        {bioEditActive && (
          <form onSubmit={handleBioSubmit}>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio || user.bio}
              aria-label="Describe who you are"
              rows={3}
              name="bio"
              id="bio"
              placeholder="Describe who you are"
              className={style["user-bio"]}
            ></textarea>
            <div className={style["bio-input-character-remaining"]}>
              101 characters remaining
            </div>
            <div className={style["action-button"]}>
              <button
                aria-label="cancel"
                type="reset"
                onClick={(e) => {
                  setBioEditActive(false);
                  setBio(e.target.value);
                }}
              >
                Cancel
              </button>
              <button aria-label="save" type="submit" disabled={!bio && true}>
                Save
              </button>
            </div>
          </form>
        )}
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
        <div
          role="button"
          tabIndex={0}
          aria-label="Edit details"
          className={style["edit-button"]}
        >
          Edit details
        </div>
      </div>
    </div>
  );
};

export default PostIntro;
