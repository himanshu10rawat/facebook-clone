import React, { useEffect, useRef } from "react";
import style from "./headerModal.module.css";
import { IoLogOut } from "react-icons/io5";
import { usePostContext } from "../../context/postContext";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import FriendRequestList from "../friendRequestListComponent/friendRequestList";

const HeaderModal = ({ setHeaderModal, openModalFor }) => {
  const navigate = useNavigate();
  const { state, dispatch } = usePostContext();
  const modalRef = useRef(null); // Reference for the modal

  const loginUser = state.users.find(
    (userData) => userData.userId === state.user.userId
  );

  const handleLogout = () => {
    dispatch({
      type: "LOG_IN",
      payload: {},
    });
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const targetElement = event.target.closest(`#${openModalFor}`);
      if (targetElement) {
        return;
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setHeaderModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setHeaderModal]);

  return (
    <div ref={modalRef} className={style["header-modal"]}>
      {openModalFor === "notifications" ? (
        <div className={style["user-notifications"]}>
          <h1>Notifications</h1>
          {state.user.friendRequest.length > 0 && (
            <>
              <h2>Friend requests</h2>
              <FriendRequestList setHeaderModal={setHeaderModal} />
            </>
          )}
        </div>
      ) : (
        <div className={style["user-profile-section"]}>
          <Link
            to={loginUser.userId}
            className={style["user-profile"]}
            onClick={() => {
              setHeaderModal(false);
            }}
          >
            <div className={style["user-image"]}>
              {loginUser.profilePic ? (
                <img
                  src={loginUser.profilePic}
                  alt={
                    loginUser.firstName +
                    " " +
                    loginUser.lastName +
                    " " +
                    "profile pic"
                  }
                />
              ) : (
                <FaUserCircle />
              )}
            </div>
            <div className={style["user-name"]}>
              {loginUser.firstName + " " + loginUser.lastName}
            </div>
          </Link>
          <div
            className={style["button"]}
            role="button"
            tabIndex={0}
            onClick={() => {
              handleLogout();
              setHeaderModal(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleLogout();
                setHeaderModal(false);
              }
            }}
          >
            <span className={style["icon"]}>
              <IoLogOut />
            </span>
            <span className={style["text"]}>Log out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderModal;
