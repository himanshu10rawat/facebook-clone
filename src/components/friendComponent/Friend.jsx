import React from "react";
import style from "./friend.module.css";
import { BsThreeDots } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { usePostContext } from "../../context/postContext";

const Friend = ({ singleFriend }) => {
  const { state } = usePostContext();

  const isLoginUser = state.user.userId === singleFriend.userId;

  const mutualFriends = singleFriend.friendList.filter((singleFriendId) => {
    return state.user.friendList?.some(
      (eachFriendId) => eachFriendId === singleFriendId
    );
  });

  return (
    <>
      <Link to={`/${singleFriend.userId}`} className={style["friend-card"]}>
        <div className={style["profile"]}>
          <div className={style["profile-picture"]}>
            {singleFriend.profilePic ? (
              <img
                src={singleFriend.profilePic}
                alt={singleFriend.firstName + " " + singleFriend.lastName}
              />
            ) : (
              <FaUser />
            )}
          </div>
          <div className={style["profile-details"]}>
            <h3>{singleFriend.firstName + " " + singleFriend.lastName}</h3>
            {!isLoginUser && (
              <p>{mutualFriends && mutualFriends.length} mutual friends</p>
            )}
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          aria-label="Edit friend"
          className={style["edit-button"]}
        >
          <BsThreeDots />
        </div>
      </Link>
    </>
  );
};

export default Friend;
