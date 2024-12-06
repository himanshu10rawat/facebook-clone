import React from "react";
import style from "./friend.module.css";
import { BsThreeDots } from "react-icons/bs";

const Friend = () => {
  return (
    <>
      <div className={style["friend-card"]}>
        <div className={style["profile"]}>
          <div className={style["profile-picture"]}>
            <img src="/dummy-profile-image.webp" alt="Friends image" />
          </div>
          <div className={style["profile-details"]}>
            <h3>Neeta Rawat</h3>
            <p>73 mutual friends</p>
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
      </div>
      <div className={style["friend-card"]}>
        <div className={style["profile"]}>
          <div className={style["profile-picture"]}>
            <img src="/dummy-profile-image.webp" alt="Friends image" />
          </div>
          <div className={style["profile-details"]}>
            <h3>Neeta Rawat</h3>
            <p>73 mutual friends</p>
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
      </div>
      <div className={style["friend-card"]}>
        <div className={style["profile"]}>
          <div className={style["profile-picture"]}>
            <img src="/dummy-profile-image.webp" alt="Friends image" />
          </div>
          <div className={style["profile-details"]}>
            <h3>Neeta Rawat</h3>
            <p>73 mutual friends</p>
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
      </div>
      <div className={style["friend-card"]}>
        <div className={style["profile"]}>
          <div className={style["profile-picture"]}>
            <img src="/dummy-profile-image.webp" alt="Friends image" />
          </div>
          <div className={style["profile-details"]}>
            <h3>Neeta Rawat</h3>
            <p>73 mutual friends</p>
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
      </div>
    </>
  );
};

export default Friend;
