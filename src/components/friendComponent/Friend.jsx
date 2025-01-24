import React from "react";
import style from "./friend.module.css";
import { BsThreeDots } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";

const Friend = ({ singleFriend }) => {
  console.log("singleFriend", singleFriend);

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
            <p>3 mutual friends</p>
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
