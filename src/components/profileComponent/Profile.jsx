import React, { useEffect, useState } from "react";
import style from "./profile.module.css";
import { Link, NavLink, useLocation } from "react-router";
import { MdEdit } from "react-icons/md";
import {
  FaCamera,
  FaFacebookMessenger,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";
import EditProfileModal from "../editProfileModalComponent/EditProfileModal";
import { usePostContext } from "../../context/postContext";
import { IoPersonAdd, IoPersonRemove } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";

const Profile = ({ user }) => {
  const [editProfile, setEditProfile] = useState(false);
  const [previewBgImage, setPreviewBgImage] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isRequestSend, setIsRequestSend] = useState(false);
  const [loginUser, setLoginUser] = useState({});
  const locationUrl = useLocation();
  const currentUrl = locationUrl.pathname;

  const { state, dispatch } = usePostContext();

  const isRequestedSent = state.user.friendRequest?.some(
    (singleRequest) => singleRequest === user.userId
  );

  const isLoginUser = state.user.userId === user.userId;

  const friendList = state.users.filter((singleUser) => {
    return user.friendList?.some(
      (eachFriendId) => eachFriendId === singleUser.userId
    );
  });

  const isCurrentUserFriend = user.friendList.some(
    (singleFriendId) => singleFriendId === loginUser.userId
  );

  useEffect(() => {
    const loginUserFind = state.users.find(
      (singleUser) => singleUser.userId === state.user.userId
    );

    setLoginUser(loginUserFind);
  }, []);

  useEffect(() => {
    const friendRequestSend = user.friendRequest?.find(
      (singleUser) => singleUser.userId === loginUser.userId
    );

    if (friendRequestSend?.userId) {
      setIsRequestSend(true);
    } else {
      setIsRequestSend(false);
    }
  }, [loginUser, user.userId]);

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
      const updatedLoginUser = { ...loginUser, bgImage: previewBgImage };
      const post = {
        coverPhoto: "updated his cover photo.",
        title: "",
        postImage: previewBgImage && previewBgImage,
        date: new Date().toLocaleDateString(),
      };

      dispatch({
        type: "ADD_BG_IMAGE",
        payload: updatedLoginUser,
      });

      dispatch({
        type: "ADD_POST",
        payload: {
          userId: loginUser.userId, // User identify karne ke liye
          posts: [...(loginUser.posts || []), post], // Updated posts array
        },
      });
      setPreviewBgImage(null);
    }
  };

  const handleRequestSend = (requestId) => {
    const currentProfileUser = state.users.find(
      (singleUser) => singleUser.userId === requestId
    );

    dispatch({
      type: "FRIEND_REQUEST",
      payload: {
        userId: currentProfileUser.userId,
        friendRequest: [
          ...(currentProfileUser.friendRequest || []),
          loginUser.userId,
        ],
      },
    });

    dispatch({
      type: "NOTIFICATION",
      payload: {
        userId: currentProfileUser.userId,
        notifications: currentProfileUser.notifications
          ? currentProfileUser.notifications + 1
          : 1,
      },
    });

    setIsRequestSend(true);
  };

  const handleRequestCancel = (requestId) => {
    const currentProfileUser = state.users.find(
      (singleUser) => singleUser.userId === requestId
    );

    const remainingRequest = currentProfileUser.friendRequest.filter(
      (singleRequest) => singleRequest.userId !== loginUser.userId
    );

    dispatch({
      type: "FRIEND_REQUEST",
      payload: {
        userId: currentProfileUser.userId,
        friendRequest: remainingRequest,
      },
    });

    dispatch({
      type: "NOTIFICATION",
      payload: {
        userId: currentProfileUser.userId,
        notifications: currentProfileUser.notifications
          ? currentProfileUser.notifications - 1
          : 0,
      },
    });
    setIsRequestSend(false);
  };

  return (
    <>
      <div className={style["profile-section"]}>
        <div className={style["profile-body"]}>
          <div className={style["cover-photo"]}>
            {isLoginUser && (
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
                    <button
                      type="reset"
                      onClick={() => setPreviewBgImage(null)}
                    >
                      Cancel
                    </button>
                    <button type="submit">Save</button>
                  </div>
                )}
              </form>
            )}
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
                  onClick={() => isLoginUser && setEditProfile(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      isLoginUser && setEditProfile(true);
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
                  {isLoginUser && (
                    <span
                      className={style["profile-change-icon"]}
                      role="button"
                      tabIndex={0}
                      aria-label="Change your profile picture"
                    >
                      <FaCamera />
                    </span>
                  )}
                </div>
                <div className={style["name-and-friends"]}>
                  <h2>{user.firstName + " " + user.lastName}</h2>
                  <p>
                    {user.friendList?.length ? user.friendList.length : 0}{" "}
                    friends
                  </p>
                  {user.friendList && (
                    <div className={style["friends-profile"]}>
                      {friendList?.map((friend) => (
                        <Link key={friend.userId} to={`/${friend.userId}`}>
                          {friend.profilePic ? (
                            <img
                              src={friend.profilePic}
                              alt={friend.firstName + " " + friend.lastName}
                            />
                          ) : (
                            <FaUserCircle />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {isLoginUser ? (
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
              ) : (
                <div className={style["connecting-with-others"]}>
                  {isCurrentUserFriend ? (
                    <button
                      type="button"
                      className={`${style["isFriend-button"]} ${style["friend-request-respond"]}`}
                    >
                      <FaUserCheck />
                      Friends
                    </button>
                  ) : isRequestedSent ? (
                    <button
                      type="button"
                      className={`${style["friend-request-btn"]} ${style["friend-request-respond"]}`}
                    >
                      <FaUserCheck />
                      Respond
                    </button>
                  ) : (
                    <>
                      {isRequestSend ? (
                        <button
                          type="button"
                          className={style["friend-request-btn"]}
                          onClick={() => handleRequestCancel(user.userId)}
                        >
                          <IoPersonRemove /> Cancel request
                        </button>
                      ) : (
                        <button
                          type="button"
                          className={style["friend-request-btn"]}
                          onClick={() => handleRequestSend(user.userId)}
                        >
                          <IoPersonAdd />
                          Add friend
                        </button>
                      )}
                    </>
                  )}
                  <button
                    type="button"
                    className={`${style["message-btn"]} ${
                      isCurrentUserFriend && style["messageEnable"]
                    }`}
                  >
                    <FaFacebookMessenger /> Message
                  </button>
                </div>
              )}
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
