
import style from "./post.module.css";
import { useRef, useState } from "react";
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
import { IMAGE_INPUT_ACCEPT } from "../../utils/imageUpload";
import { copyText, runOnKeyboardAction, showToast } from "../../utils/feedback";

const Post = ({ postList, user, postIndex }) => {
  const { state, dispatch } = usePostContext();
  const [publicComment, setPublicComment] = useState("");
  const [replyInputs, setReplyInputs] = useState({});
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const publicCommentRef = useRef(null);
  const loginUser = state.users.find(
    (singleUser) => singleUser.userId === state.user.userId
  );
  const likedBy = Array.isArray(postList.likedBy) ? postList.likedBy : [];
  const postComments = Array.isArray(postList.postComments)
    ? postList.postComments
    : [];
  const hasLiked = likedBy.includes(loginUser?.userId);
  const likesCount =
    typeof postList.likes === "number" ? postList.likes : likedBy.length;
  const shareCount = Number(postList.share) || 0;
  const commentsCount = postComments.length;
  const visibleComments = showAllComments ? postComments : postComments.slice(-2);
  const postUrl = `${window.location.origin}/${user.userId}`;
  const postSummary = (postList.title || "Fakebook post").replace(/<[^>]*>/g, "");

  if (isHidden) {
    return null;
  }

  const updatePost = (updatedPost) => {
    dispatch({
      type: "UPDATE_POST",
      payload: {
        userId: user.userId,
        postIndex,
        post: {
          ...postList,
          ...updatedPost,
        },
      },
    });
  };

  const getUserById = (userId) =>
    state.users.find((singleUser) => singleUser.userId === userId);

  const getDisplayName = (profileUser) =>
    `${profileUser?.firstName || ""} ${profileUser?.lastName || ""}`.trim();

  const handleLikeToggle = () => {
    if (!loginUser) return;
    const updatedLikedBy = hasLiked
      ? likedBy.filter((userId) => userId !== loginUser.userId)
      : [...likedBy, loginUser.userId];

    updatePost({
      likedBy: updatedLikedBy,
      likes: updatedLikedBy.length,
    });
  };

  const handleShare = () => {
    updatePost({
      share: shareCount + 1,
    });
    copyText(postUrl, "Post link copied");
  };

  const handleSend = () => {
    const text = encodeURIComponent(`${postSummary} ${postUrl}`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
    showToast("Opening WhatsApp share");
  };

  const handleCopyPostLink = () => {
    copyText(postUrl, "Post link copied");
    setIsOptionsOpen(false);
  };

  const handleHidePost = () => {
    setIsHidden(true);
    showToast("Post hidden from this view");
  };

  const handleCommentFocus = () => {
    publicCommentRef.current?.focus();
  };

  const handlePublicCommentSubmit = (event) => {
    event.preventDefault();
    const trimmedComment = publicComment.trim();
    if (!trimmedComment || !loginUser) return;

    const updatedComments = [
      ...postComments,
      {
        userId: loginUser.userId,
        username: getDisplayName(loginUser),
        comment: trimmedComment,
        replies: [],
      },
    ];

    updatePost({
      postComments: updatedComments,
      comments: updatedComments.length,
    });
    setPublicComment("");
  };

  const handleReplySubmit = (commentIndex, event) => {
    event.preventDefault();
    const trimmedReply = (replyInputs[commentIndex] || "").trim();
    if (!trimmedReply || !loginUser) return;

    const updatedComments = postComments.map((postComment, index) => {
      if (index !== commentIndex) return postComment;

      return {
        ...postComment,
        replies: [
          ...(postComment.replies || []),
          {
            userId: loginUser.userId,
            username: getDisplayName(loginUser),
            comment: trimmedReply,
          },
        ],
      };
    });

    updatePost({
      postComments: updatedComments,
      comments: updatedComments.length,
    });
    setReplyInputs((currentInputs) => ({
      ...currentInputs,
      [commentIndex]: "",
    }));
  };

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
                {postList.coverPhoto && (
                  <span className={style["cover-image-title"]}>
                    {postList.coverPhoto}
                  </span>
                )}
                {postList.postType === "live" && (
                  <span className={style["cover-image-title"]}>
                    started a live video
                  </span>
                )}
                {postList.feeling && (
                  <span className={style["cover-image-title"]}>
                    is feeling {postList.feeling}
                  </span>
                )}
                {postList.taggedFriendName && (
                  <span className={style["cover-image-title"]}>
                    with {postList.taggedFriendName}
                  </span>
                )}
                {postList.location && (
                  <span className={style["cover-image-title"]}>
                    at {postList.location}
                  </span>
                )}
              </span>
              <span className={style["profile-date"]}>
                {postList.date} &#x2022;{" "}
                <span>
                  <FaUserFriends />
                </span>
              </span>
            </div>
          </div>
          <div className={style["controls"]}>
            <div className={style["options-wrapper"]}>
              <BsThreeDots
                role="button"
                tabIndex={0}
                aria-label="Option"
                onClick={() => setIsOptionsOpen((isOpen) => !isOpen)}
                onKeyDown={(event) =>
                  runOnKeyboardAction(event, () =>
                    setIsOptionsOpen((isOpen) => !isOpen)
                  )
                }
              />
              {isOptionsOpen && (
                <div className={style["options-menu"]}>
                  <button type="button" onClick={handleCopyPostLink}>
                    Copy link
                  </button>
                  <button type="button" onClick={handleHidePost}>
                    Hide post
                  </button>
                </div>
              )}
            </div>
            <IoMdClose
              role="button"
              tabIndex={0}
              aria-label="Close"
              onClick={handleHidePost}
              onKeyDown={(event) => runOnKeyboardAction(event, handleHidePost)}
            />
          </div>
        </div>
        {!postList.postImage ? (
          <div
            className={style["post-quotes-single"]}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postList.title),
            }}
          ></div>
        ) : (
          <div
            className={style["post-quotes"]}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postList.title),
            }}
          ></div>
        )}
      </div>
      {postList.postImage && (
        <div className={style["post-body"]}>
          <img src={postList.postImage} alt={postList.title} />
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
            <span className={style["likes-count"]}>{likesCount}</span>
          </div>
          <div className={style["comments-and-share-view-part"]}>
            <span>
              {commentsCount} {commentsCount === 1 ? "comment" : "comments"}
            </span>
            <span>
              {shareCount} {shareCount === 1 ? "share" : "shares"}
            </span>
          </div>
        </div>
        <div className={style["footer-actions"]}>
          <span
            role="button"
            tabIndex={0}
            aria-label="Like"
            className={`${style["footer-action"]} ${
              hasLiked ? style["footer-action-active"] : ""
            }`}
            onClick={handleLikeToggle}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleLikeToggle();
              }
            }}
          >
            <AiOutlineLike /> Like
          </span>
          <span
            role="button"
            tabIndex={0}
            aria-label="Comment"
            className={style["footer-action"]}
            onClick={handleCommentFocus}
            onKeyDown={(event) => runOnKeyboardAction(event, handleCommentFocus)}
          >
            <FaRegComment className={style["comment-icon"]} /> Comment
          </span>
          <span
            role="button"
            tabIndex={0}
            aria-label="Send"
            className={style["footer-action"]}
            onClick={handleSend}
            onKeyDown={(event) => runOnKeyboardAction(event, handleSend)}
          >
            <FaWhatsapp /> Send
          </span>
          <span
            role="button"
            tabIndex={0}
            aria-label="Share"
            className={style["footer-action"]}
            onClick={handleShare}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                handleShare();
              }
            }}
          >
            <PiShareFatLight /> Share
          </span>
        </div>
        <div className={style["comment-section"]}>
          {commentsCount > 2 && (
            <span
              className={style["view-more-comment"]}
              role="button"
              tabIndex={0}
              aria-label="View more comments"
              onClick={() => setShowAllComments((showAll) => !showAll)}
              onKeyDown={(event) =>
                runOnKeyboardAction(event, () =>
                  setShowAllComments((showAll) => !showAll)
                )
              }
            >
              {showAllComments ? "Hide extra comments" : "View more comments"}
            </span>
          )}
          <div className={style["comment-list"]}>
            {visibleComments.map((postComment, visibleIndex) => {
                const index = showAllComments
                  ? visibleIndex
                  : postComments.length - visibleComments.length + visibleIndex;
                const commentUser = getUserById(postComment.userId) || user;
                return (
                  <div className={style["comment"]} key={index}>
                    <div className={style["first-comment"]}>
                      <Link
                        to={`/${commentUser.userId}`}
                        className={style["profile-picture"]}
                      >
                        {commentUser.profilePic ? (
                          <img
                            src={commentUser.profilePic}
                            alt={`${commentUser.firstName} profile picture`}
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
                            <b
                              role="button"
                              tabIndex={0}
                              onClick={() => showToast("Comment liked")}
                              onKeyDown={(event) =>
                                runOnKeyboardAction(event, () =>
                                  showToast("Comment liked")
                                )
                              }
                            >
                              Like
                            </b>
                          </span>
                          <span
                            role="button"
                            tabIndex={0}
                            onClick={() =>
                              document
                                .getElementById(`message-reply-${index}`)
                                ?.focus()
                            }
                            onKeyDown={(event) =>
                              runOnKeyboardAction(event, () =>
                                document
                                  .getElementById(`message-reply-${index}`)
                                  ?.focus()
                              )
                            }
                          >
                            Reply
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${style["comment-list"]} ${style["reply-comments"]}`}
                    >
                      {(postComment.replies || []).map((reply, replyIndex) => {
                        const replyUser = getUserById(reply.userId) || user;
                        return (
                        <div key={replyIndex} className={style["comment"]}>
                          <div className={style["first-comment"]}>
                            <Link
                              to={`/${replyUser.userId}`}
                              className={style["profile-picture"]}
                            >
                              {replyUser.profilePic ? (
                                <img
                                  src={replyUser.profilePic}
                                  alt={`${replyUser.firstName} profile picture`}
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
                                  <b
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => showToast("Reply liked")}
                                    onKeyDown={(event) =>
                                      runOnKeyboardAction(event, () =>
                                        showToast("Reply liked")
                                      )
                                    }
                                  >
                                    Like
                                  </b>
                                </span>
                                <span
                                  role="button"
                                  tabIndex={0}
                                  onClick={() =>
                                    document
                                      .getElementById(`message-reply-${index}`)
                                      ?.focus()
                                  }
                                  onKeyDown={(event) =>
                                    runOnKeyboardAction(event, () =>
                                      document
                                        .getElementById(`message-reply-${index}`)
                                        ?.focus()
                                    )
                                  }
                                >
                                  Reply
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        );
                      })}
                    </div>
                    <div className={style["reply-comment-section"]}>
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
                        <form onSubmit={(event) => handleReplySubmit(index, event)}>
                          <textarea
                            rows="1"
                            name="message-reply"
                            id={`message-reply-${index}`}
                            placeholder={`Reply to ${postComment.username}...`}
                            value={replyInputs[index] || ""}
                            onChange={(event) =>
                              setReplyInputs((currentInputs) => ({
                                ...currentInputs,
                                [index]: event.target.value,
                              }))
                            }
                          ></textarea>
                          <div className={style["reply-footer"]}>
                            <div className={style["attachment-options"]}>
                              <span className={style["attachment-option"]}>
                                <label htmlFor={`camera-${index}`}>
                                  <CiCamera />
                                </label>
                                <input
                                  type="file"
                                  name="camera"
                                  id={`camera-${index}`}
                                  accept={IMAGE_INPUT_ACCEPT}
                                  onChange={(event) => {
                                    if (event.target.files?.length) {
                                      showToast("Reply attachment selected");
                                    }
                                  }}
                                />
                              </span>
                              <span className={style["attachment-option"]}>
                                <CiFaceSmile
                                  role="button"
                                  tabIndex={0}
                                  aria-label="Add smile"
                                  onClick={() =>
                                    setReplyInputs((currentInputs) => ({
                                      ...currentInputs,
                                      [index]: `${currentInputs[index] || ""}:)`,
                                    }))
                                  }
                                  onKeyDown={(event) =>
                                    runOnKeyboardAction(event, () =>
                                      setReplyInputs((currentInputs) => ({
                                        ...currentInputs,
                                        [index]: `${currentInputs[index] || ""}:)`,
                                      }))
                                    )
                                  }
                                />
                              </span>
                            </div>
                            <button
                              type="submit"
                              tabIndex={0}
                              aria-label="Submit reply"
                              disabled={!(replyInputs[index] || "").trim()}
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
              <form onSubmit={handlePublicCommentSubmit}>
                <textarea
                  rows="1"
                  name="public-comment"
                  id="public-comment"
                  placeholder="Write a public comment..."
                  value={publicComment}
                  ref={publicCommentRef}
                  onChange={(event) => setPublicComment(event.target.value)}
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
                        accept={IMAGE_INPUT_ACCEPT}
                        onChange={(event) => {
                          if (event.target.files?.length) {
                            showToast("Comment attachment selected");
                          }
                        }}
                      />
                    </span>
                    <span
                      className={style["attachment-option"]}
                      tabIndex={0}
                      aria-label="Emoji"
                      role="button"
                      onClick={() =>
                        setPublicComment((currentComment) => `${currentComment}:)`)
                      }
                      onKeyDown={(event) =>
                        runOnKeyboardAction(event, () =>
                          setPublicComment(
                            (currentComment) => `${currentComment}:)`
                          )
                        )
                      }
                    >
                      <CiFaceSmile />
                    </span>
                  </div>
                  <button
                    type="submit"
                    tabIndex={0}
                    aria-label="Submit comment"
                    disabled={!publicComment.trim()}
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
