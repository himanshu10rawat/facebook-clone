import React, { useState } from "react";
import style from "./friendsList.module.css";
import Friend from "../friendComponent/Friend";
import { Link } from "react-router";

const FriendsList = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={style["friends-section"]}>
      <h2>Friends</h2>
      <ul className={style["shorting"]}>
        <li
          onClick={() => setActiveTab(0)}
          className={activeTab === 0 ? style["activeBtn"] : ""}
        >
          All friends
        </li>
        <li
          onClick={() => setActiveTab(1)}
          className={activeTab === 1 ? style["activeBtn"] : ""}
        >
          Recently added
        </li>
        <li
          onClick={() => setActiveTab(2)}
          className={activeTab === 2 ? style["activeBtn"] : ""}
        >
          Birthday
        </li>
        <li
          onClick={() => setActiveTab(3)}
          className={activeTab === 3 ? style["activeBtn"] : ""}
        >
          University
        </li>
        <li
          onClick={() => setActiveTab(4)}
          className={activeTab === 4 ? style["activeBtn"] : ""}
        >
          Current city
        </li>
        <li
          onClick={() => setActiveTab(5)}
          className={activeTab === 5 ? style["activeBtn"] : ""}
        >
          Home town
        </li>
        <li
          onClick={() => setActiveTab(6)}
          className={activeTab === 6 ? style["activeBtn"] : ""}
        >
          Followers
        </li>
        <li
          onClick={() => setActiveTab(7)}
          className={activeTab === 7 ? style["activeBtn"] : ""}
        >
          Following
        </li>
      </ul>
      <div className={style["friends-list"]}>
        <Friend />
      </div>
      <Link className={style["see-all-link"]}>See All</Link>
    </div>
  );
};

export default FriendsList;
