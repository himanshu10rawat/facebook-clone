import { useState } from "react";
import style from "./videoList.module.css";
import { Link, useParams } from "react-router";
import Video from "../videoComponent/Video";

const VideoList = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { userId } = useParams();

  return (
    <div className={style["videos-section"]}>
      <h2>Videos</h2>
      <ul className={style["shorting"]}>
        <li
          onClick={() => setActiveTab(0)}
          className={activeTab === 0 ? style["activeBtn"] : ""}
        >
          Your Videos
        </li>
        <li
          onClick={() => setActiveTab(1)}
          className={activeTab === 1 ? style["activeBtn"] : ""}
        >
          Videos of you
        </li>
      </ul>
      <div className={style["videos-list"]}>
        <Video />
      </div>
      <Link to={userId ? `/${userId}/videos` : "/watch"} className={style["see-all-link"]}>
        See All
      </Link>
    </div>
  );
};

export default VideoList;
