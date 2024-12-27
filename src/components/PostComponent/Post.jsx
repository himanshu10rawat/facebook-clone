import React from "react";
import style from "./post.module.css";
import DOMPurify from "dompurify";
import {
  FaUserFriends,
  FaRegComment,
  FaWhatsapp,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";
import { BsThreeDots, BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { AiFillLike } from "react-icons/ai";
import { CiCamera, CiFaceSmile } from "react-icons/ci";
import { Link } from "react-router";
import { usePostContext } from "../../context/postContext";

const Post = ({ postlist, user }) => {
  const { state } = usePostContext();
  const loginUser = state.users.find(
    (singleUser) => singleUser.userId === state.user.userId
  );
  return (
    <div className={style["fb-post"]}>
      <div className={style["post-header"]}>
        <div className={style["profile-details-and-controls"]}>
          <div className={style["profile-details"]}>
            <Link to={`/${user.userId}`} className={style["profile-image"]}>
              {user.profilePic ? (
                <img
                  src={user.profilePic}
                  alt={`${user.firstName} profile picture`}
                />
              ) : (
                <FaUserCircle />
              )}
            </Link>
            <div className={style["profile-other-details"]}>
              <span className={style["profile-name"]}>
                {user.firstName + " " + user.lastName}
                {postlist.coverPhoto && (
                  <span className={style["cover-image-title"]}>
                    {postlist.coverPhoto}
                  </span>
                )}
              </span>
              <span className={style["profile-date"]}>
                {postlist.date} &#x2022;{" "}
                <span>
                  <FaUserFriends />
                </span>
              </span>
            </div>
          </div>
          <div className={style["controls"]}>
            <BsThreeDots role="button" tabIndex={0} aria-label="Option" />
            <IoMdClose role="button" tabIndex={0} aria-label="Close" />
          </div>
        </div>
        {!postlist.postImage ? (
          <div
            className={style["post-quotes-single"]}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postlist.title),
            }}
          ></div>
        ) : (
          <div
            className={style["post-quotes"]}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postlist.title),
            }}
          ></div>
        )}
      </div>
      {postlist.postImage && (
        <div className={style["post-body"]}>
          <img src={postlist.postImage} alt={postlist.title} />
        </div>
      )}
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
            <span className={style["likes-count"]}>{postlist.likes}</span>
          </div>
          <div className={style["comments-and-share-view-part"]}>
            <span>{postlist.comments}</span>
            <span>{postlist.share}</span>
          </div>
        </div>
        <div className={style["footer-actions"]}>
          <span
            role="button"
            tabIndex={0}
            aria-label="Like"
            className={style["footer-action"]}
          >
            <AiOutlineLike /> Like
          </span>
          <span
            role="button"
            tabIndex={0}
            aria-label="Comment"
            className={style["footer-action"]}
          >
            <FaRegComment className={style["comment-icon"]} /> Comment
          </span>
          <span
            role="button"
            tabIndex={0}
            aria-label="Send"
            className={style["footer-action"]}
          >
            <FaWhatsapp /> Send
          </span>
          <span
            role="button"
            tabIndex={0}
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
            tabIndex={0}
            aria-label="View more comments"
          >
            View more comments
          </span>
          <div className={style["comment-list"]}>
            {postlist.postComments &&
              postlist.postComments.map((postComment, index) => {
                return (
                  <div className={style["comment"]} key={index}>
                    <div className={style["first-comment"]}>
                      <Link
                        to={user.userId}
                        className={style["profile-picture"]}
                      >
                        {user.profilePic ? (
                          <img
                            src={user.profilePic}
                            alt={`${user.firstName} profile picture`}
                          />
                        ) : (
                          <FaUserCircle />
                        )}
                      </Link>
                      <div className={style["user-comment-section"]}>
                        <div className={style["user-comment-box"]}>
                          <span className={style["user-name"]}>
                            {postComment.username}
                          </span>
                          <span className={style["user-comment"]}>
                            {postComment.comment}
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
                      {postComment.replies.map((reply, index) => (
                        <div key={index} className={style["comment"]}>
                          <div className={style["first-comment"]}>
                            <Link
                              to={user.userId}
                              className={style["profile-picture"]}
                            >
                              {user.profilePic ? (
                                <img
                                  src={user.profilePic}
                                  alt={`${user.firstName} profile picture`}
                                />
                              ) : (
                                <FaUserCircle />
                              )}
                            </Link>
                            <div className={style["user-comment-section"]}>
                              <div className={style["user-comment-box"]}>
                                <span className={style["user-name"]}>
                                  {reply.username}
                                </span>
                                <span className={style["user-comment"]}>
                                  <span
                                    className={style["mention-comment-owner"]}
                                  >
                                    {postComment.username}
                                  </span>{" "}
                                  {reply.comment}
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
                      ))}
                    </div>
                    <div className={style["reply-comment-section"]}>
                      <Link
                        to={user.userId}
                        className={style["profile-picture"]}
                      >
                        {user.profilePic ? (
                          <img
                            src={user.profilePic}
                            alt={`${user.firstName} profile picture`}
                          />
                        ) : (
                          <FaUserCircle />
                        )}
                      </Link>
                      <div className={style["reply-comment-box"]}>
                        <form>
                          <textarea
                            rows="1"
                            name="message-reply"
                            id="message-reply"
                            placeholder={`Reply to ${postComment.username}...`}
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
                              tabIndex={0}
                              aria-label="Submit reply"
                            >
                              <IoMdSend />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={style["write-comment"]}>
            <Link
              to={`/${loginUser.userId}`}
              className={style["profile-picture"]}
            >
              {loginUser.profilePic ? (
                <img
                  src={loginUser.profilePic}
                  alt={`${loginUser.firstName} profile picture`}
                />
              ) : (
                <FaUserCircle />
              )}
            </Link>
            <div className={style["reply-comment-box"]}>
              <form>
                <textarea
                  rows="1"
                  name="public-comment"
                  id="public-comment"
                  placeholder="Write a public comment..."
                ></textarea>
                <div className={style["reply-footer"]}>
                  <div className={style["attachment-options"]}>
                    <span className={style["attachment-option"]}>
                      <label
                        htmlFor="commentcamera"
                        tabIndex={0}
                        aria-label="Camera"
                      >
                        <CiCamera />
                      </label>
                      <input
                        type="file"
                        name="commentcamera"
                        id="commentcamera"
                      />
                    </span>
                    <span
                      className={style["attachment-option"]}
                      tabIndex={0}
                      aria-label="Emoji"
                    >
                      <CiFaceSmile />
                    </span>
                  </div>
                  <button type="submit" tabIndex={0} aria-label="Submit reply">
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
