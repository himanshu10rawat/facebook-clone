import React from "react";
import style from "./postFriends.module.css";
import { Link } from "react-router";

const PostFriends = () => {
  return (
    <div className={style["post-friends"]}>
      <div className={style["friends-header"]}>
        <div className={style["left-side-header"]}>
          <h2>
            <Link>Friends</Link>
          </h2>
          <p>363 friends</p>
        </div>
        <p className={style["right-side-header"]}>
          <Link>See all friends</Link>
        </p>
      </div>
      <div className={style["friends-body"]}>
        <Link>
          <span className={style["userimage"]}>
            <img src="/dummy-profile-image.webp" alt="Radha Rawat" />
          </span>
          <span className={style["username"]}>Hemant Singh Rawat</span>
        </Link>
        <Link>
          <span className={style["userimage"]}>
            <img src="/dummy-profile-image.webp" alt="Radha Rawat" />
          </span>
          <span className={style["username"]}>Radha Rawat</span>
        </Link>
        <Link>
          <span className={style["userimage"]}>
            <img src="/dummy-profile-image.webp" alt="Radha Rawat" />
          </span>
          <span className={style["username"]}>Radha Rawat</span>
        </Link>
        <Link>
          <span className={style["userimage"]}>
            <img src="/dummy-profile-image.webp" alt="Radha Rawat" />
          </span>
          <span className={style["username"]}>Radha Rawat</span>
        </Link>
        <Link>
          <span className={style["userimage"]}>
            <img src="/dummy-profile-image.webp" alt="Radha Rawat" />
          </span>
          <span className={style["username"]}>Radha Rawat</span>
        </Link>
        <Link>
          <span className={style["userimage"]}>
            <img src="/dummy-profile-image.webp" alt="Radha Rawat" />
          </span>
          <span className={style["username"]}>Radha Rawat</span>
        </Link>
      </div>
    </div>
  );
};

export default PostFriends;
