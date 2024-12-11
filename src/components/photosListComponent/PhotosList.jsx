import React, { useState } from "react";
import style from "./photosList.module.css";
import { Link, useParams } from "react-router";
import Photos from "../photoComponent/Photo";
import { usePostContext } from "../../context/postContext";

const PhotosList = () => {
  const [activeTab, setActiveTab] = useState(0);

  const { state } = usePostContext();
  const { userId } = useParams();

  const user = state.users.find((user) => user.userId === userId);

  return (
    <div className={style["photos-section"]}>
      <h2>Photos</h2>
      <ul className={style["shorting"]}>
        <li
          onClick={() => setActiveTab(0)}
          className={activeTab === 0 ? style["activeBtn"] : ""}
        >
          Photos of your
        </li>
        <li
          onClick={() => setActiveTab(1)}
          className={activeTab === 1 ? style["activeBtn"] : ""}
        >
          Your Photos
        </li>
        <li
          onClick={() => setActiveTab(2)}
          className={activeTab === 2 ? style["activeBtn"] : ""}
        >
          Albums
        </li>
      </ul>
      <div className={style["photos-list"]}>
        {user.posts.map((post, index) => (
          <Photos key={index} post={post} />
        ))}
      </div>
      <Link className={style["see-all-link"]}>See All</Link>
    </div>
  );
};

export default PhotosList;
