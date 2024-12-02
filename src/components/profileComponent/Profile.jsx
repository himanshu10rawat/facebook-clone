import React from "react";
import style from "./profile.module.css";
import { Link } from "react-router";
import { MdEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div className={style["profile-section"]}>
      <div className={style["profile-body"]}>
        <div className={style["cover-photo"]}>
          <img src="./dummy-cover-image.jpg" alt="Cover Image" />
        </div>
        <div className={style["other-details"]}>
          <div className={style["profile-edit-and-details"]}>
            <div className={style["profile-details"]}>
              <div className={style["profile-picture"]}>
                <img src="/dummy-profile-image.webp" alt="profile image" />
                <span
                  className={style["profile-change-icon"]}
                  role="button"
                  tabIndex={0}
                  aria-label="Change your profile picture"
                >
                  <FaCamera />
                </span>
              </div>
              <div className={style["name-and-friends"]}>
                <h2>Himanshu Rawat</h2>
                <p>363 friends</p>
                <div className={style["friends-profile"]}>
                  <Link>
                    <img
                      src="/dummy-profile-image.webp"
                      alt="friends profile"
                    />
                  </Link>
                  <Link>
                    <img
                      src="/dummy-profile-image.webp"
                      alt="friends profile"
                    />
                  </Link>
                  <Link>
                    <img
                      src="/dummy-profile-image.webp"
                      alt="friends profile"
                    />
                  </Link>
                  <Link>
                    <img
                      src="/dummy-profile-image.webp"
                      alt="friends profile"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className={style["profile-edit"]}>
              <span
                role="button"
                tabIndex={0}
                aria-label="Edit profile"
                className={style["button"]}
              >
                <MdEdit />
                Edit profile
              </span>
            </div>
          </div>
          <div className={style["profile-tabs"]}>
            <ul>
              <li>
                <Link className={style["active-tab"]}>Posts</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Friends</Link>
              </li>
              <li>
                <Link>Photos</Link>
              </li>
              <li>
                <Link>Videos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
