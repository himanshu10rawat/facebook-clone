import React from "react";
import style from "./headerModal.module.css";
import { IoLogOut } from "react-icons/io5";
import { context } from "../../context/postContext";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const HeaderModal = ({ setHeadModal }) => {
  const navigate = useNavigate();
  const { userContext, usersContext } = context();
  const { user, setUser } = userContext;
  const { users } = usersContext;

  const loginUser = users.find((userData) => userData.userId === user.userId);

  const handleLogout = () => {
    setUser({});
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div
      onBlur={(e) => {
        // Check if the blur event is due to losing focus outside the modal
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setHeadModal(false);
        }
      }}
      tabIndex={0} // Makes the div focusable
      className={style["header-modal"]}
    >
      <Link
        to={loginUser.userId}
        className={style["user-profile"]}
        onClick={() => setHeadModal(false)}
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
