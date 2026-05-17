
import { useState } from "react";
import style from "./video.module.css";
import { MdEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { runOnKeyboardAction, showToast } from "../../utils/feedback";

const DEFAULT_VIDEOS = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: `Profile video ${index + 1}`,
  duration: "10:54",
  thumbnail: "/dummy-profile-image.webp",
}));

const Video = () => {
  const [videos, setVideos] = useState(DEFAULT_VIDEOS);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleEditVideo = (event, videoId) => {
    event.stopPropagation();
    const video = videos.find((singleVideo) => singleVideo.id === videoId);
    const title = window.prompt("Video title", video.title);

    if (title === null) return;

    setVideos((currentVideos) =>
      currentVideos.map((singleVideo) =>
        singleVideo.id === videoId ? { ...singleVideo, title } : singleVideo
      )
    );
    showToast("Video title updated");
  };

  return (
    <>
      {videos.map((video) => (
        <div
          className={style["video"]}
          key={video.id}
          role="button"
          tabIndex={0}
          aria-label={`Open ${video.title}`}
          onClick={() => setSelectedVideo(video)}
          onKeyDown={(event) =>
            runOnKeyboardAction(event, () => setSelectedVideo(video))
          }
        >
          <img src={video.thumbnail} alt={video.title} />
          <span
            role="button"
            aria-label="Edit video"
            tabIndex={0}
            className={style["edit-button"]}
            onClick={(event) => handleEditVideo(event, video.id)}
            onKeyDown={(event) =>
              runOnKeyboardAction(event, () => handleEditVideo(event, video.id))
            }
          >
            <MdEdit />
          </span>
          <span className={style["video-duration"]}>{video.duration}</span>
        </div>
      ))}
      {selectedVideo && (
        <div className={style["video-modal"]}>
          <div className={style["video-player"]}>
            <button type="button" onClick={() => setSelectedVideo(null)}>
              <IoMdClose />
            </button>
            <img src={selectedVideo.thumbnail} alt={selectedVideo.title} />
            <h2>{selectedVideo.title}</h2>
            <p>{selectedVideo.duration}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
