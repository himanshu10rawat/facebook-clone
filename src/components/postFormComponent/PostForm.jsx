import { useState } from "react";
import style from "./postForm.module.css";
import { IoMdClose } from "react-icons/io";
import {
  FaUserFriends,
  FaUserTag,
  FaRegSmile,
  FaUserCircle,
} from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiFaceSmile } from "react-icons/ci";
import { MdAddToPhotos, MdPhotoLibrary } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { usePostContext } from "../../context/postContext";
import { Link } from "react-router";
import { getImagePreviewFromFile, IMAGE_INPUT_ACCEPT } from "../../utils/imageUpload";
import { runOnKeyboardAction, showToast } from "../../utils/feedback";

const FEELINGS = ["Happy", "Excited", "Grateful", "Relaxed", "Motivated"];
const PRIVACY_OPTIONS = ["Friends", "Public", "Only me"];

const PostForm = ({
  setOpenPostModal,
  mediaOpen,
  setMediaOpen,
  initialMode = "post",
}) => {
  const { state, dispatch } = usePostContext();

  const [formData, setFormData] = useState({
    postCaption: "",
  });
  const [previewImage, setPreviewImage] = useState("");
  const [imageMessage, setImageMessage] = useState("");
  const [activeTool, setActiveTool] = useState(
    initialMode === "feeling" ? "feeling" : ""
  );
  const [privacy, setPrivacy] = useState("Friends");
  const [feeling, setFeeling] = useState("");
  const [location, setLocation] = useState("");
  const [taggedFriendId, setTaggedFriendId] = useState("");

  const loginUser = state.users.find(
    (user) => user.userId === state.user.userId
  );
  const friendList = state.users.filter((singleUser) =>
    loginUser?.friendList?.includes(singleUser.userId)
  );
  const taggedFriend = state.users.find(
    (singleUser) => singleUser.userId === taggedFriendId
  );

  const imageHandleChange = async (e) => {
    const file = e.target.files[0];
    const result = await getImagePreviewFromFile(file);

    if (!result.success) {
      setPreviewImage("");
      setImageMessage(result.error);
      return;
    }

    setPreviewImage(result.preview);
    setImageMessage(result.warning || "");
  };

  const handleRemoveImage = () => {
    setPreviewImage("");
    setImageMessage("");
    setMediaOpen(false);
  };

  const handleCloseModal = () => {
    setOpenPostModal(false);
  };

  const handleOpenMedia = () => {
    setMediaOpen(true);
    setActiveTool("");
  };

  const handleToolToggle = (toolName) => {
    setActiveTool((currentTool) => (currentTool === toolName ? "" : toolName));
  };

  const handleEmojiInsert = () => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      postCaption: `${currentFormData.postCaption}:)`,
    }));
  };

  const handlePrivacyCycle = () => {
    const currentIndex = PRIVACY_OPTIONS.indexOf(privacy);
    setPrivacy(PRIVACY_OPTIONS[(currentIndex + 1) % PRIVACY_OPTIONS.length]);
    showToast(`Post privacy set to ${PRIVACY_OPTIONS[(currentIndex + 1) % PRIVACY_OPTIONS.length]}`);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      postId: `${loginUser.userId}-${Date.now()}`,
      title: formData.postCaption,
      postImage: previewImage && previewImage,
      date: new Date().toLocaleDateString(),
      privacy,
      feeling,
      location,
      taggedFriendId,
      taggedFriendName: taggedFriend
        ? `${taggedFriend.firstName} ${taggedFriend.lastName}`
        : "",
      postType: initialMode === "live" ? "live" : "post",
      likes: 0,
      likedBy: [],
      share: 0,
      postComments: [],
    };

    dispatch({
      type: "ADD_POST",
      payload: {
        userId: loginUser.userId,
        posts: [...(loginUser.posts || []), post],
      },
    });

    setFormData({ postCaption: "" });
    setPreviewImage("");
    setImageMessage("");
    setActiveTool("");
    setPrivacy("Friends");
    setFeeling("");
    setLocation("");
    setTaggedFriendId("");
    setMediaOpen(false);
    setOpenPostModal(false);
    showToast("Post created");
  };
  return (
    <div className={style["modal-wrapper"]}>
      <div className={style["post-modal"]}>
        <div className={style["modal-header"]}>
          <h2>Create Post</h2>
          <span
            role="button"
            tabIndex={0}
            aria-label="Close Modal"
            className={style["modal-close"]}
            onClick={handleCloseModal}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleCloseModal();
              }
            }}
          >
            <IoMdClose />
          </span>
        </div>
        <div className={style["modal-body"]}>
          <div className={style["profile-section"]}>
            <Link to={`/${state.user.userId}`} className={style["profile-image"]}>
              {state.user.profilePic ? (
                <img
                  src={state.user.profilePic}
                  alt={`${state.user.firstName} profile picture`}
                />
              ) : (
                <FaUserCircle />
              )}
            </Link>
            <div className={style["profile-details"]}>
              <span className={style["username"]}>
                {state.user.firstName + " " + state.user.lastName}
              </span>
              <span
                className={style["share-with"]}
                role="button"
                tabIndex={0}
                aria-label="Share with options"
                onClick={handlePrivacyCycle}
                onKeyDown={(event) =>
                  runOnKeyboardAction(event, handlePrivacyCycle)
                }
              >
                <FaUserFriends />
                {privacy} <TiArrowSortedDown />
              </span>
            </div>
          </div>
          <div className={style["post-form"]}>
            <form onSubmit={handleSubmit}>
              <div className={style["form-input-section"]}>
                <div className={style["input-group"]}>
                  <textarea
                    name="postCaption"
                    id="post-caption"
                    style={{ fontSize: `${!mediaOpen ? "24px" : "15px"}` }}
                    rows={!mediaOpen ? 4 : 1}
                    placeholder={`What's on your mind, ${state.user.firstName}?`}
                    aria-label="Post caption"
                    onChange={handleInputChange}
                    value={formData.postCaption}
                  ></textarea>
                  <span
                    className={style["emoji-button"]}
                    role="button"
                    tabIndex={0}
                    aria-label="Emoji"
                    onClick={handleEmojiInsert}
                    onKeyDown={(event) =>
                      runOnKeyboardAction(event, handleEmojiInsert)
                    }
                  >
                    <CiFaceSmile />
                  </span>
                </div>
                {activeTool === "tag" && (
                  <div className={style["tool-panel"]}>
                    <label htmlFor="taggedFriend">Tag a friend</label>
                    <select
                      id="taggedFriend"
                      value={taggedFriendId}
                      onChange={(event) => setTaggedFriendId(event.target.value)}
                    >
                      <option value="">Select friend</option>
                      {friendList.map((friend) => (
                        <option key={friend.userId} value={friend.userId}>
                          {friend.firstName} {friend.lastName}
                        </option>
                      ))}
                    </select>
                    {!friendList.length && (
                      <p>You can tag friends after adding them.</p>
                    )}
                  </div>
                )}
                {activeTool === "feeling" && (
                  <div className={style["tool-panel"]}>
                    <span>How are you feeling?</span>
                    <div className={style["feeling-options"]}>
                      {FEELINGS.map((feelingOption) => (
                        <button
                          type="button"
                          key={feelingOption}
                          className={
                            feeling === feelingOption ? style["active"] : ""
                          }
                          onClick={() => setFeeling(feelingOption)}
                        >
                          {feelingOption}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {activeTool === "location" && (
                  <div className={style["tool-panel"]}>
                    <label htmlFor="postLocation">Add location</label>
                    <input
                      id="postLocation"
                      type="text"
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      placeholder="Where are you?"
                    />
                  </div>
                )}
                {mediaOpen && (
                  <div className={style["image-section"]}>
                    <span
                      className={style["image-remove-button"]}
                      role="button"
                      tabIndex={0}
                      aria-label="Remove image/images"
                      onClick={handleRemoveImage}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleRemoveImage();
                        }
                      }}
                    >
                      <IoMdClose />
                    </span>
                    {!previewImage ? (
                      <div className={style["dummy-image"]}>
                        <label htmlFor="media">
                          <span className={style["add-images-icon"]}>
                            <MdAddToPhotos />
                          </span>
                          <h2>Add Photos/Videos</h2>
                          <p>or drag and drop</p>
                        </label>
                        <input
                          type="file"
                          name="media"
                          id="media"
                          accept={IMAGE_INPUT_ACCEPT}
                          onChange={imageHandleChange}
                        />
                      </div>
                    ) : (
                      <div className={style["image-list"]}>
                        <div className={style["image"]}>
                          <img
                            src={previewImage}
                            alt="Selected post media"
                            onError={() => {
                              setImageMessage("This image format cannot be previewed in this browser. Please convert it to JPG or PNG.");
                              setPreviewImage("");
                            }}
                          />
                        </div>
                      </div>
                    )}
                    {imageMessage && (
                      <p className={style["upload-message"]}>{imageMessage}</p>
                    )}
                  </div>
                )}
              </div>
              <div className={style["add-more-section"]}>
                <span className={style["add-more-text"]}>Add More</span>
                <div className={style["add-more-options"]}>
                  <span
                    className={style["add-more-item"]}
                    role="button"
                    tabIndex={0}
                    aria-label="Add media"
                    onClick={handleOpenMedia}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleOpenMedia();
                      }
                    }}
                  >
                    <MdPhotoLibrary />
                  </span>
                  <span className={style["add-more-item"]}>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="Tag friends"
                      onClick={() => handleToolToggle("tag")}
                      onKeyDown={(event) =>
                        runOnKeyboardAction(event, () => handleToolToggle("tag"))
                      }
                    >
                      <FaUserTag />
                    </span>
                  </span>
                  <span className={style["add-more-item"]}>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="Feeling"
                      onClick={() => handleToolToggle("feeling")}
                      onKeyDown={(event) =>
                        runOnKeyboardAction(event, () =>
                          handleToolToggle("feeling")
                        )
                      }
                    >
                      <FaRegSmile />
                    </span>
                  </span>
                  <span className={style["add-more-item"]}>
                    <span
                      role="button"
                      tabIndex={0}
                      aria-label="Location"
                      onClick={() => handleToolToggle("location")}
                      onKeyDown={(event) =>
                        runOnKeyboardAction(event, () =>
                          handleToolToggle("location")
                        )
                      }
                    >
                      <FaLocationDot />
                    </span>
                  </span>
                </div>
              </div>
              <button
                disabled={
                  !(
                    formData.postCaption.trim() ||
                    previewImage ||
                    feeling ||
                    location.trim() ||
                    taggedFriendId
                  )
                }
                type="submit"
                className={style["post-button"]}
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
