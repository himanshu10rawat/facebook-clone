import React from "react";
import style from "./headerModal.module.css";
import { IoLogOut } from "react-icons/io5";
import { context } from "../../context/postContext";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const HeaderModal = ({ setHeadModal }) => {
  const { userContext } = context();
  const { user, setUser } = userContext;

  const handleLogout = () => {
    setUser({});
  };
  return (
    <div className={style["header-modal"]}>
      <Link
        to={"profile"}
        className={style["user-profile"]}
        onClick={() => setHeadModal(false)}
      >
        <div className={style["user-image"]}>
          {user.profilePic ? (
            <img
              src="/dummy-profile-image.webp"
              alt={user.firstName + " " + user.lastName + " " + "profile pic"}
            />
          ) : (
            <FaUserCircle />
          )}
        </div>
        <div className={style["user-name"]}>
          {user.firstName + " " + user.lastName}
        </div>
      </Link>
      <div
        className={style["button"]}
        role="button"
        tabIndex={0}
        onClick={() => {
          handleLogout();
          setHeadModal(false);
        }}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && handleLogout()
        }
      >
        <span className={style["icon"]}>
          <IoLogOut />
        </span>
        <span className={style["text"]}>Log out</span>
      </div>
    </div>
  );
};

export default HeaderModal;
