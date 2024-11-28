import React from "react";
import style from "./post.module.css";
import {
  FaUserFriends,
  FaRegComment,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa";
import { BsThreeDots, BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { CiCamera, CiFaceSmile } from "react-icons/ci";

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
            <div className={style["like-emoji-section"]}>
              <span className={style["likes-emoji"]}>
                <AiFillLike />
              </span>
              <span className={style["likes-emoji"]}>
                <FaHeart />
              </span>
              <span className={style["likes-emoji"]}>
                <BsFillEmojiHeartEyesFill />
              </span>
            </div>
            <span className={style["likes-count"]}>
              You, bhakti and 200 others
            </span>
          </div>
          <div className={style["comments-and-share-view-part"]}>
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
            <FaRegComment className={style["comment-icon"]} /> Comment
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
        <div className={style["comment-section"]}>
          <span
            className={style["view-more-comment"]}
            role="button"
            tabIndex={"0"}
            aria-label="View more comments"
          >
            View more comments
          </span>
          <div className={style["comment-list"]}>
            <div className={style["comment"]}>
              <div className={style["first-comment"]}>
                <div className={style["profile-picture"]}>
                  <img
                    src="https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-1/312571533_648193656674370_8905052856127291733_n.jpg?stp=dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=aJjhGUUd37IQ7kNvgGVT-cn&_nc_zt=24&_nc_ht=scontent.fdel32-1.fna&_nc_gid=A48cIW3gCfkSatM2U6RoGU7&oh=00_AYD4mWI6zOPj164Zqhzs0bdjrJ276VaAucGw7-GFuQxZ2w&oe=674B4C1C"
                    alt="User profile picture"
                  />
                </div>
                <div className={style["user-comment-section"]}>
                  <div className={style["user-comment-box"]}>
                    <span className={style["user-name"]}>Vinod Kumar</span>
                    <span className={style["user-comment"]}>
                      Jai Shri Ram, Jai Baba Ki🙏
                    </span>
                  </div>
                  <div className={style["comment-other-option"]}>
                    <span>24m</span>
                    <span>
                      <b>Like</b>
                    </span>
                    <span>Reply</span>
                  </div>
                </div>
              </div>
              <div className={style[("comment-list", "reply-comments")]}>
                <div className={style["comment"]}>
                  <div className={style["first-comment"]}>
                    <div className={style["profile-picture"]}>
                      <img
                        src="https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-1/417380866_2065772103790903_7360360743510704365_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=N3ICKu3yqQwQ7kNvgEL-_bw&_nc_zt=24&_nc_ht=scontent.fdel32-1.fna&_nc_gid=AhWO1t03gxw_Bbj_l73i7d1&oh=00_AYCBQ2pzjouTCfcaoTexVl8oz5FSFhYO-P5NgOayoDdCTA&oe=674B5390"
                        alt="User profile picture"
                      />
                    </div>
                    <div className={style["user-comment-section"]}>
                      <div className={style["user-comment-box"]}>
                        <span className={style["user-name"]}>
                          Himanshu Rawat
                        </span>
                        <span className={style["user-comment"]}>
                          <span className={style["mention-comment-owner"]}>
                            Vinod Kumar
                          </span>{" "}
                          Har Har Mahadev🙏
                        </span>
                      </div>
                      <div className={style["comment-other-option"]}>
                        <span>24m</span>
                        <span>
                          <b>Like</b>
                        </span>
                        <span>Reply</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style["reply-comment-section"]}>
                <div className={style["profile-picture"]}>
                  <img
                    src="https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-1/417380866_2065772103790903_7360360743510704365_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=N3ICKu3yqQwQ7kNvgEL-_bw&_nc_zt=24&_nc_ht=scontent.fdel32-1.fna&_nc_gid=AhWO1t03gxw_Bbj_l73i7d1&oh=00_AYCBQ2pzjouTCfcaoTexVl8oz5FSFhYO-P5NgOayoDdCTA&oe=674B5390"
                    alt="User profile picture"
                  />
                </div>
                <div className={style["reply-comment-box"]}>
                  <form>
                    <textarea
                      rows="1"
                      name="message-reply"
                      id="message-reply"
                      placeholder="Reply to Username..."
                    ></textarea>
                    <div className={style["reply-footer"]}>
                      <div className={style["attachment-options"]}>
                        <span className={style["attachment-option"]}>
                          <label htmlFor="camera">
                            <CiCamera />
                          </label>
                          <input type="file" name="camera" id="camera" />
                        </span>
                        <span className={style["attachment-option"]}>
                          <CiFaceSmile />
                        </span>
                      </div>
                      <button
                        type="submit"
                        tabIndex={"0"}
                        aria-label="Submit reply"
                      >
                        <IoMdSend />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className={style["write-comment"]}>
            <div className={style["profile-picture"]}>
              <img
                src="https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-1/417380866_2065772103790903_7360360743510704365_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=N3ICKu3yqQwQ7kNvgEL-_bw&_nc_zt=24&_nc_ht=scontent.fdel32-1.fna&_nc_gid=AYzHj2eUyVj-irlFmn1mk5h&oh=00_AYBdPa90a0P4kRxQ8OmfwPUw1bqQZe2ZL7LeVaYFTdXYGQ&oe=674B5390"
                alt="User profile image"
              />
            </div>
            <div className={style["reply-comment-box"]}>
              <form>
                <textarea
                  rows="1"
                  name="message-reply"
                  id="message-reply"
                  placeholder="Write a public comment..."
                ></textarea>
                <div className={style["reply-footer"]}>
                  <div className={style["attachment-options"]}>
                    <span className={style["attachment-option"]}>
                      <label htmlFor="camera">
                        <CiCamera />
                      </label>
                      <input type="file" name="camera" id="camera" />
                    </span>
                    <span className={style["attachment-option"]}>
                      <CiFaceSmile />
                    </span>
                  </div>
                  <button
                    type="submit"
                    tabIndex={"0"}
                    aria-label="Submit reply"
                  >
                    <IoMdSend />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
