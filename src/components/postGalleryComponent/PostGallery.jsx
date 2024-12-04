import React from "react";
import style from "./postGallery.module.css";
import { Link } from "react-router";

const PostGallery = () => {
  return (
    <div className={style["profile-photos"]}>
      <div className={style["photos-header"]}>
        <h2>
          <Link>Photos</Link>
        </h2>
        <p>
          <Link>See All Photos</Link>
        </p>
      </div>
      <div className={style["photos-body"]}>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
        <Link>
          <img src="/dummy-profile-image.webp" alt="photos" />
        </Link>
      </div>
    </div>
  );
};

export default PostGallery;
