import React from "react";
import style from "./post.module.css";
import { FaUserFriends, FaRegComment, FaWhatsapp } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";

const Post = () => {
  return (
    <div className={style["fb-post"]}>
      <div className={style["post-header"]}>
        <div className={style["profile-details-and-controls"]}>
          <div className={style["profile-details"]}>
            <div className={style["profile-image"]}>
              <img
                src="https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-1/417380866_2065772103790903_7360360743510704365_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zchevvPK9jkQ7kNvgGsHOtL&_nc_zt=24&_nc_ht=scontent.fdel32-1.fna&_nc_gid=Ak-Q4NoTLlwEzceOT4EUSoV&oh=00_AYCK7kDfo3nIyof3GW51Qx_P70ychjlnEXeTIx_emEi7RQ&oe=67487850"
                alt="User profile picture"
              />
            </div>
            <div className={style["profile-other-details"]}>
              <span className={style["profile-name"]}>Himanshu Rawat</span>
              <span className={style["profile-date"]}>
                4 March &#x2022;{" "}
                <span>
                  <FaUserFriends />
                </span>
              </span>
            </div>
          </div>
          <div className={style["controls"]}>
            <BsThreeDots role="button" tabIndex={"0"} aria-label="Option" />
            <IoMdClose role="button" tabIndex={"0"} aria-label="Close" />
          </div>
        </div>
        <div className={style["post-quotes"]}>
          Jai Shree Ram🚩
          <br />
          Jai Hanuman🚩
        </div>
      </div>
      <div className={style["post-body"]}>
        <img
          src="https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-6/468327472_28428970706693773_4272749646513982332_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=3pIAeavqVC0Q7kNvgErcMPH&_nc_zt=23&_nc_ht=scontent.fdel32-1.fna&_nc_gid=A9vCCF-Ct4RncyNIUjkuJPM&oh=00_AYBHRfDWvb9Mhdb2Y1rDbFODBYkQyzKpMDhq0jKFMfwuDw&oe=67488AF4"
          alt="User uploaded photo"
        />
      </div>
      <div className={style["post-footer"]}>
        <div className={style["total-likes-comments-shares-view"]}>
          <div className={style["likes-view-part"]}>
            <span className={style["likes-emoji"]}></span>
            <span className={style["likes-emoji"]}></span>
            <span className={style["likes-emoji"]}></span>
            <span className={style["likes-count"]}>
              You, bhakti and 200 others
            </span>
          </div>
          <div className={["comments-and-share-view-part"]}>
            <span>53 comments</span>
            <span>1 share</span>
          </div>
        </div>
        <div className={style["footer-actions"]}>
          <span
            role="button"
            tabIndex={"0"}
            aria-label="Like"
            className={style["footer-action"]}
          >
            <AiOutlineLike /> Like
          </span>
          <span
            role="button"
            tabIndex={"0"}
            aria-label="Comment"
            className={style["footer-action"]}
          >
            <FaRegComment /> Comment
          </span>
          <span
            role="button"
            tabIndex={"0"}
            aria-label="Send"
            className={style["footer-action"]}
          >
            <FaWhatsapp /> Send
          </span>
          <span
            role="button"
            tabIndex={"0"}
            aria-label="Share"
            className={style["footer-action"]}
          >
            <PiShareFatLight /> Share
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
