import React from "react";
import style from "./createPost.module.css";
import { RiLiveFill } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import PostForm from "../postFormComponent/PostForm";

const CreatePost = () => {
  return (
    <>
      <section className={style["post-section"]}>
        <div className={style["only-post"]}>
          <span className={style["profile-picture"]}>
            <img
              src="https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-1/417380866_2065772103790903_7360360743510704365_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zchevvPK9jkQ7kNvgGsHOtL&_nc_zt=24&_nc_ht=scontent.fdel32-1.fna&_nc_gid=Ak-Q4NoTLlwEzceOT4EUSoV&oh=00_AYCK7kDfo3nIyof3GW51Qx_P70ychjlnEXeTIx_emEi7RQ&oe=67487850"
              alt="User Profile Picture"
            />
          </span>
          <span
            className={style["write-post-button"]}
            role="button"
            tabIndex={0}
            aria-label="Post"
          >
            What's on your mind, Username?
          </span>
        </div>
        <div className={style["post-with-media"]}>
          <span role="button" tabIndex={0} aria-label="Live video">
            <RiLiveFill />
            Live video
          </span>
          <span role="button" tabIndex={0} aria-label="Photo/Video">
            <MdPhotoLibrary />
            Photo/Video
          </span>
          <span role="button" tabIndex={0} aria-label="Feeling/Activity">
            <FaRegSmile />
            Feeling/Activity
          </span>
        </div>
      </section>
      <PostForm />
    </>
  );
};

export default CreatePost;
