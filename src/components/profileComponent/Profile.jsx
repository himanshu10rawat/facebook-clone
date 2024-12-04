import React from "react";
import style from "./profile.module.css";
import { Link, NavLink, useLocation } from "react-router";
import { MdEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const locationUrl = useLocation();
  const currentUrl = locationUrl.pathname;

  return (
    <div className={style["profile-section"]}>
      <div className={style["profile-body"]}>
        <div className={style["cover-photo"]}>
          <img src="/dummy-cover-image.jpg" alt="Cover Image" />
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
                <NavLink
                  to={""}
                  end // Ensures the exact match for the home path
                  className={({ isActive }) =>
                    isActive ? style["active-tab"] : ""
                  }
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ||
                    currentUrl === "/profile/about_overview" ||
                    currentUrl === "/profile/about_work_and_education" ||
                    currentUrl === "/profile/about_places" ||
                    currentUrl === "/profile/about_contact_and_basic_info" ||
                    currentUrl === "/profile/about_family_and_relationships" ||
                    currentUrl === "/profile/about_details" ||
                    currentUrl === "/profile/about_life_events"
                      ? style["active-tab"]
                      : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"friends"}
                  className={({ isActive }) =>
                    isActive ? style["active-tab"] : ""
                  }
                >
                  Friends
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"photos"}
                  className={({ isActive }) =>
                    isActive ? style["active-tab"] : ""
                  }
                >
                  Photos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"videos"}
                  className={({ isActive }) =>
                    isActive ? style["active-tab"] : ""
                  }
                >
                  Videos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
