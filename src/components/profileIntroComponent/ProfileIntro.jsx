import React from "react";
import style from "./profileIntro.module.css";
import { Link } from "react-router";
import { FaHeart, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const ProfileIntro = () => {
  return (
    <div className={style["profile-intro"]}>
      <h2>Intro</h2>
      <div className={style["bio-details"]}>
        <p className={style["bio"]}>Nature LOVER 🌍</p>
        <div
          role="button"
          tabIndex={0}
          aria-label="Edit bio"
          className={style["edit-button"]}
        >
          Edit Bio
        </div>
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

export default ProfileIntro;
