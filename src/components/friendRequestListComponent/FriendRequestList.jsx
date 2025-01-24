import React from "react";
import { usePostContext } from "../../context/postContext";
import style from "./friendRequestList.module.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";

const FriendRequestList = ({ setHeaderModal }) => {
  const { state, dispatch } = usePostContext();

  const loginUser = state.users.find(
    (userData) => userData.userId === state.user.userId
  );

  const friendRequest = state.users.filter((singleUser) => {
    return loginUser.friendRequest?.some((eachRequestId) => {
      return singleUser.userId === eachRequestId;
    });
  });

  const handleRequestDelete = (requestDeleteId, event) => {
    event.stopPropagation();
    event.preventDefault();
    const remainingRequest = loginUser.friendRequest.filter(
      (singleRequest) => singleRequest !== requestDeleteId
    );

    dispatch({
      type: "FRIEND_REQUEST",
      payload: {
        userId: loginUser.userId,
        friendRequest: remainingRequest,
      },
    });
  };

  const handleRequestConfirm = (requestConfirmId, event) => {
    event.stopPropagation();
    event.preventDefault();
    const newFriend = state.users.find(
      (singleUser) => singleUser.userId === requestConfirmId
    );

    dispatch({
      type: "ADD_FRIEND",
      payload: {
        userId: loginUser.userId,
        friendList: [...(loginUser.friendList || []), newFriend.userId],
      },
    });
    dispatch({
      type: "ADD_FRIEND",
      payload: {
        userId: newFriend.userId,
        friendList: [...(newFriend.friendList || []), loginUser.userId],
      },
    });

    const remainingRequest = loginUser.friendRequest.filter(
      (singleRequest) => singleRequest !== requestConfirmId
    );

    dispatch({
      type: "FRIEND_REQUEST",
      payload: {
        userId: loginUser.userId,
        friendRequest: remainingRequest,
      },
    });
  };
  return (
    <div className={style["friend-request-list"]}>
      {friendRequest?.map((singleRequest) => (
        <Link
          to={`/${singleRequest.userId}`}
          className={style["friend-request-item"]}
          key={singleRequest.userId}
          onClick={() => setHeaderModal(false)}
        >
          <div className={style["profile-pic"]}>
            {singleRequest.profilePic ? (
              <img src={singleRequest.profilePic} alt="profile-pic" />
            ) : (
              <FaUserCircle />
            )}
          </div>
          <div className={style["requested-details"]}>
            <span className={style["request-title"]}>
              <strong>
                {singleRequest.firstName + " " + singleRequest.lastName}
              </strong>{" "}
              sent you a friend request.
            </span>
            <span className={style["request-time"]}>a day ago</span>
            <div className={style["action-button"]}>
              <button
                type="button"
                className={style["confirm"]}
                onClick={(event) =>
                  handleRequestConfirm(singleRequest.userId, event)
                }
              >
                Confirm
              </button>
              <button
                type="button"
                className={style["delete"]}
                onClick={(event) =>
                  handleRequestDelete(singleRequest.userId, event)
                }
              >
                Delete
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FriendRequestList;
