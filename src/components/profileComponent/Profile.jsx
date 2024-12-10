import React, { useState } from "react";
import style from "./profile.module.css";
import { Link, NavLink, useLocation } from "react-router";
import { MdEdit } from "react-icons/md";
import { FaCamera, FaUser } from "react-icons/fa";
import EditProfileModal from "../editProfileModalComponent/EditProfileModal";
import { usePostContext } from "../../context/postContext";

const Profile = ({ user }) => {
  const [editProfile, setEditProfile] = useState(false);
  const [previewBgImage, setPreviewBgImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const locationUrl = useLocation();
  const currentUrl = locationUrl.pathname;

  const { state, dispatch } = usePostContext();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewBgImage(reader.result);
        if (reader.result === user.bgImage) return;
        setIsImageLoading(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (previewBgImage) {
      const loginUser = state.users.find(
        (singleUser) => singleUser.userId === user.userId
      );

      const updatedLoginUser = { ...loginUser, bgImage: previewBgImage };

      dispatch({
        type: "ADD_BG_IMAGE",
        payload: updatedLoginUser,
      });
      setPreviewBgImage(null);
    }
  };

  return (
    <>
      <div className={style["profile-section"]}>
        <div className={style["profile-body"]}>
          <div className={style["cover-photo"]}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="bgImage" className={style["edit-cover-photo"]}>
                <FaCamera /> Edit cover photo
                <input
                  type="file"
                  name="bgImage"
                  id="bgImage"
                  accept="image/*"
                  onChange={handleChange}
                />
              </label>
              {previewBgImage && (
                <div className={style["action-buttons"]}>
                  <button type="reset" onClick={() => setPreviewBgImage(null)}>
                    Cancel
                  </button>
                  <button type="submit">Save</button>
                </div>
              )}
            </form>
            {isImageLoading && <h2 className={style["loader"]}>Loading...</h2>}
            <img
              src={previewBgImage || user.bgImage || "/banner-placeholder.webp"}
              alt={user.firstName + " " + user.lastName + " " + "cover image"}
              onLoad={() => {
                setIsImageLoading(false);
              }}
              onError={() => {
                setIsImageLoading(false);
              }}
              style={{ display: isImageLoading ? "none" : "block" }}
            />
          </div>
          <div className={style["other-details"]}>
            <div className={style["profile-edit-and-details"]}>
              <div className={style["profile-details"]}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Edit profile image"
                  className={style["profile-picture"]}
                  onClick={() => setEditProfile(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setEditProfile(true);
                    }
                  }}
                >
                  {user.profilePic ? (
                    <img
                      src={user.profilePic}
                      alt={
                        user.firstName +
                        " " +
                        user.lastName +
                        " " +
                        "profile pic"
                      }
                    />
                  ) : (
                    <FaUser className={style["profile-pic-placeholder"]} />
                  )}
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
                  <h2>{user.firstName + " " + user.lastName}</h2>
                  <p>
                    {user.friendsList?.length ? user.friendsList?.length : 0}{" "}
                    friends
                  </p>
                  {user.friendsList && (
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
                    </div>
                  )}
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
                      currentUrl ===
                        "/profile/about_family_and_relationships" ||
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
      {editProfile && (
        <EditProfileModal
          setEditProfile={setEditProfile}
          profilePic={user.profilePic}
        />
      )}
    </>
  );
};

export default Profile;
