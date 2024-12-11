import React from "react";
import style from "./postGallery.module.css";
import { Link, useParams } from "react-router";
import { usePostContext } from "../../context/postContext";

const PostGallery = () => {
  const { state } = usePostContext();
  const { userId } = useParams();

  const user = state.users.find((user) => user.userId === userId);

  return (
    <div className={style["profile-photos"]}>
      <div className={style["photos-header"]}>
        <h2>
          <Link to={"photos"}>Photos</Link>
        </h2>
        <p>
          <Link to={"photos"}>See All Photos</Link>
        </p>
      </div>
      <div className={style["photos-body"]}>
        {user.posts.map((post, index) => {
          return (
            post.postImage && (
              <Link key={index}>
                <img src={post.postImage} alt={post.title} />
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};

export default PostGallery;
