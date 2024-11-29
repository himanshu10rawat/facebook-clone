import React from "react";
import style from "./postForm.module.css";
import { IoMdClose } from "react-icons/io";
import { FaUserFriends, FaUserTag, FaRegSmile } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiFaceSmile } from "react-icons/ci";
import { MdAddToPhotos, MdPhotoLibrary } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const PostForm = () => {
  return (
    <div className={style["modal-wrapper"]}>
      <div className={style["post-modal"]}>
        <div className={style["modal-header"]}>
          <h2>Create Post</h2>
          <span className={style["modal-close"]}>
            <IoMdClose />
          </span>
        </div>
        <div className={style["modal-body"]}>
          <div className={style["profile-section"]}>
            <div className={style["profile-image"]}>
              <img
                src={
                  "https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-1/417380866_2065772103790903_7360360743510704365_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zchevvPK9jkQ7kNvgGsHOtL&_nc_zt=24&_nc_ht=scontent.fdel32-1.fna&_nc_gid=Ak-Q4NoTLlwEzceOT4EUSoV&oh=00_AYCK7kDfo3nIyof3GW51Qx_P70ychjlnEXeTIx_emEi7RQ&oe=67487850"
                }
                alt="Himanshu Rawat profile picture"
              />
            </div>
            <div className={style["profile-details"]}>
              <span className={style["username"]}>Himanshu Rawat</span>
              <span
                className={style["share-with"]}
                role="button"
                tabIndex={0}
                aria-label="Share with options"
              >
                <FaUserFriends />
                Friends <TiArrowSortedDown />
              </span>
            </div>
          </div>
          <div className={style["post-form"]}>
            <form>
              <div className="input-group">
                <textarea
                  name="post-caption"
                  id="post-caption"
                  placeholder="What's on your mind, ${Himanshu}?"
                  aria-label="Post caption"
                ></textarea>
                <span
                  className="emoji-button"
                  role="button"
                  tabIndex={0}
                  aria-label="Emoji"
                >
                  <CiFaceSmile />
                </span>
              </div>
              <div className="image-section">
                <span
                  className="image-remove-button"
                  role="button"
                  tabIndex={0}
                  aria-label="Remove image/images"
                >
                  <IoMdClose />
                </span>
                <div className="dummy-image">
                  <label htmlFor="file">
                    <span>
                      <MdAddToPhotos />
                    </span>
                    <h2>Add Photos/Videos</h2>
                    <p>or drag and drop</p>
                  </label>
                  <input type="file" name="file" id="file" />
                </div>
                {/* <div className="image-list">
                <div className="image">
                  <img src="" alt="" />
                </div>
              </div> */}
                <div className="add-more-section">
                  <span>Add More</span>
                  <div className="add-more-options">
                    <span className="add-more-item">
                      <MdPhotoLibrary />
                    </span>
                    <span className="add-more-item">
                      <FaUserTag />
                    </span>
                    <span className="add-more-item">
                      <FaRegSmile />
                    </span>
                    <span className="add-more-item">
                      <FaLocationDot />
                    </span>
                  </div>
                </div>
                <button type="button">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
