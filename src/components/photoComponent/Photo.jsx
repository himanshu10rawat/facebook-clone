import React from "react";
import style from "./photo.module.css";
import { MdEdit } from "react-icons/md";

const Photos = ({ post }) => {
  return (
    <>
      {post.postImage && (
        <div className={style["photo"]}>
          <img src={post.postImage} alt={post.title} />
          <span
            role="button"
            aria-label="Edit photo"
            tabIndex={0}
            className={style["edit-button"]}
          >
            <MdEdit />
          </span>
        </div>
      )}
    </>
  );
};

export default Photos;
