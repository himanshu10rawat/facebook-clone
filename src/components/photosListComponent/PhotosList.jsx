import React, { useState } from "react";
import style from "./photosList.module.css";
import { Link } from "react-router";
import Photos from "../photoComponent/Photo";

const PhotosList = () => {
  const [activeTab, setActiveTab] = useState(0);

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
        <Photos />
      </div>
      <Link className={style["see-all-link"]}>See All</Link>
    </div>
  );
};

export default PhotosList;
