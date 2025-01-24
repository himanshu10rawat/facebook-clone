import React from "react";
import style from "./postFriends.module.css";
import { Link, useParams } from "react-router";
import { usePostContext } from "../../context/postContext";
import { FaUser } from "react-icons/fa";

const PostFriends = () => {
  const { userId } = useParams();

  const { state } = usePostContext();

  const currentProfileUser = state.users.find((user) => user.userId === userId);

  return (
    <div className={style["post-friends"]}>
      <div className={style["friends-header"]}>
        <div className={style["left-side-header"]}>
          <h2>
            <Link to={`/${currentProfileUser.userId}/friends`}>Friends</Link>
          </h2>
          <p>
            {currentProfileUser.friendList?.length
              ? currentProfileUser.friendList.length
              : 0}{" "}
            friends
          </p>
        </div>
        <p className={style["right-side-header"]}>
          <Link to={`/${currentProfileUser.userId}/friends`}>
            See all friends
          </Link>
        </p>
      </div>
      <div className={style["friends-body"]}>
        {currentProfileUser.friendList?.map((friend) => (
          <Link to={`/${friend.userId}`} key={friend.userId}>
            <span className={style["user-image"]}>
              {friend.profilePic ? (
                <img
                  src={friend.profilePic}
                  alt={friend.firstName + " " + friend.lastName}
                />
              ) : (
                <FaUser />
              )}
            </span>
            <span className={style["username"]}>
              {friend.firstName + " " + friend.lastName}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostFriends;
