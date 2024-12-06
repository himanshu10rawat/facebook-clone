import React from "react";
import About from "../../../components/aboutComponent/About";
import FriendsList from "../../../components/friendsListComponent/FriendsList";
import PhotosList from "../../../components/photosListComponent/PhotosList";
import style from "./aboutTab.module.css";
import VideoList from "../../../components/videoListComponent/VideoList";

const AboutTab = () => {
  return (
    <div className={style["about-tab"]}>
      <About />
      <FriendsList />
      <PhotosList />
      <VideoList />
    </div>
  );
};

export default AboutTab;
