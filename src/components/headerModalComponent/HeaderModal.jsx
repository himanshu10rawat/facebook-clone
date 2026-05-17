import { useEffect, useRef } from "react";
import style from "./headerModal.module.css";
import { IoLogOut } from "react-icons/io5";
import { usePostContext } from "../../context/postContext";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import FriendRequestList from "../friendRequestListComponent/FriendRequestList";
import { showToast } from "../../utils/feedback";

const HeaderModal = ({ setHeaderModal, openModalFor }) => {
  const navigate = useNavigate();
  const { state, dispatch } = usePostContext();
  const modalRef = useRef(null);

  const loginUser = state.users.find(
    (userData) => userData.userId === state.user.userId
  );

  const handleLogout = () => {
    dispatch({
      type: "LOG_OUT",
      payload: {},
    });
    navigate("/");
  };

  const handleMessage = (friend) => {
    const message = window.prompt(
      `Message ${friend.firstName} ${friend.lastName}`,
      ""
    );

    if (message?.trim()) {
      showToast(`Message sent to ${friend.firstName}`);
      setHeaderModal(false);
    }
  };

  const friendList = state.users.filter((singleUser) =>
    loginUser?.friendList?.includes(singleUser.userId)
  );

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
  }, [openModalFor, setHeaderModal]);

  return (
    <div ref={modalRef} className={style["header-modal"]}>
      {openModalFor === "notifications" ? (
        <div className={style["user-notifications"]}>
          <h1>Notifications</h1>
          {state.user.friendRequest?.length > 0 && (
            <>
              <h2>Friend requests</h2>
              <FriendRequestList setHeaderModal={setHeaderModal} />
            </>
          )}
          {!state.user.friendRequest?.length && (
            <p className={style["empty-state"]}>No new notifications</p>
          )}
        </div>
      ) : openModalFor === "messenger" ? (
        <div className={style["messenger-section"]}>
          <h1>Messenger</h1>
          {friendList.length ? (
            friendList.map((friend) => (
              <button
                type="button"
                className={style["message-row"]}
                key={friend.userId}
                onClick={() => handleMessage(friend)}
              >
                <span className={style["user-image"]}>
                  {friend.profilePic ? (
                    <img
                      src={friend.profilePic}
                      alt={`${friend.firstName} profile picture`}
                    />
                  ) : (
                    <FaUserCircle />
                  )}
                </span>
                <span>{friend.firstName + " " + friend.lastName}</span>
              </button>
            ))
          ) : (
            <p className={style["empty-state"]}>
              Add friends to start messaging.
            </p>
          )}
        </div>
      ) : (
        <div className={style["user-profile-section"]}>
          <Link
            to={`/${loginUser.userId}`}
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
