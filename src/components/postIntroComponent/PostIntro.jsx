import { useEffect, useRef, useState } from "react";
import style from "./postIntro.module.css";
import { FaHeart, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { usePostContext } from "../../context/postContext";
import { runOnKeyboardAction, showToast } from "../../utils/feedback";

const CHARACTER_LIMIT = 101;

const PostIntro = ({ user }) => {
  const [bio, setBio] = useState(user.bio || "");
  const [bioEditActive, setBioEditActive] = useState(false);
  const [isInputChange, setIsInputChange] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(
    CHARACTER_LIMIT - (user.bio?.length || 0)
  );
  const [detailsEditActive, setDetailsEditActive] = useState(false);
  const [detailsForm, setDetailsForm] = useState({
    currentCity: user.currentCity || "Delhi, India",
    hometown: user.hometown || "Delhi, India",
    relationship: user.relationship || "Single",
  });
  const textareaRef = useRef(null);
  const { state, dispatch } = usePostContext();

  const isActiveUser = state.user.userId === user.userId;

  useEffect(() => {
    if (bioEditActive && textareaRef.current) {
      const length = bio.length;
      textareaRef.current.setSelectionRange(length, length);
    }
  }, [bio, bioEditActive]);

  useEffect(() => {
    setDetailsForm({
      currentCity: user.currentCity || "Delhi, India",
      hometown: user.hometown || "Delhi, India",
      relationship: user.relationship || "Single",
    });
  }, [user.currentCity, user.hometown, user.relationship]);

  const handleTextareaChange = (e) => {
    const newBio = e.target.value;

    if (newBio.length > CHARACTER_LIMIT) return;

    setCharacterLimit(CHARACTER_LIMIT - newBio.length);
    setBio(newBio);

    setIsInputChange(newBio !== user.bio);
  };

  const handleBioSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "BIO_ADD",
      payload: { ...user, bio },
    });
    setBioEditActive(false);
    setIsInputChange(false);
  };

  const handleCancel = () => {
    setBioEditActive(false);
    setBio(user.bio || "");
    setIsInputChange(false);
  };

  const handleDetailsChange = (event) => {
    const { name, value } = event.target;
    setDetailsForm((currentDetails) => ({
      ...currentDetails,
      [name]: value,
    }));
  };

  const handleDetailsSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_PROFILE_DETAILS",
      payload: {
        userId: user.userId,
        ...detailsForm,
      },
    });
    setDetailsEditActive(false);
    showToast("Profile details updated");
  };

  const handleDetailsCancel = () => {
    setDetailsForm({
      currentCity: user.currentCity || "Delhi, India",
      hometown: user.hometown || "Delhi, India",
      relationship: user.relationship || "Single",
    });
    setDetailsEditActive(false);
  };

  return (
    <div className={style["profile-intro"]}>
      <h2>Intro</h2>
      <div className={style["bio-details"]}>
        {user.bio && !bioEditActive && (
          <p className={style["bio"]}>{user.bio}</p>
        )}
        {isActiveUser &&
          (!bioEditActive ? (
            <div
              onClick={() => {
                setBioEditActive(true);
                setBio(user.bio || "");
              }}
              role="button"
              tabIndex={0}
              aria-label="Edit bio"
              className={style["edit-button"]}
            >
              Edit Bio
            </div>
          ) : (
            <form onSubmit={handleBioSubmit}>
              <textarea
                ref={textareaRef}
                autoFocus
                onChange={handleTextareaChange}
                value={bio}
                aria-label="Describe who you are"
                rows={3}
                name="bio"
                id="bio"
                placeholder="Describe who you are"
                className={style["user-bio"]}
              ></textarea>
              <div className={style["bio-input-character-remaining"]}>
                {characterLimit} characters remaining
              </div>
              <div className={style["action-button"]}>
                <button aria-label="cancel" type="reset" onClick={handleCancel}>
                  Cancel
                </button>
                <button
                  aria-label="save"
                  type="submit"
                  disabled={!isInputChange}
                >
                  Save
                </button>
              </div>
            </form>
          ))}
      </div>
      <div className={style["personal-details"]}>
        {detailsEditActive ? (
          <form className={style["details-form"]} onSubmit={handleDetailsSubmit}>
            <label htmlFor="currentCity">Current city</label>
            <input
              id="currentCity"
              name="currentCity"
              value={detailsForm.currentCity}
              onChange={handleDetailsChange}
            />
            <label htmlFor="hometown">Home town</label>
            <input
              id="hometown"
              name="hometown"
              value={detailsForm.hometown}
              onChange={handleDetailsChange}
            />
            <label htmlFor="relationship">Relationship</label>
            <input
              id="relationship"
              name="relationship"
              value={detailsForm.relationship}
              onChange={handleDetailsChange}
            />
            <div className={style["action-button"]}>
              <button type="reset" onClick={handleDetailsCancel}>
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </form>
        ) : (
          <>
            <ul>
              <li>
                <FaHome />
                Lives in{" "}
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    detailsForm.currentCity
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {detailsForm.currentCity}
                </a>
              </li>
              <li>
                <FaLocationDot />
                From{" "}
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    detailsForm.hometown
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {detailsForm.hometown}
                </a>
              </li>
              <li>
                <FaHeart />
                {detailsForm.relationship}
              </li>
              <li>
                <MdAccessTimeFilled />
                Joined on November 2015
              </li>
            </ul>
            {isActiveUser && (
              <div
                role="button"
                tabIndex={0}
                aria-label="Edit details"
                className={style["edit-button"]}
                onClick={() => setDetailsEditActive(true)}
                onKeyDown={(event) =>
                  runOnKeyboardAction(event, () => setDetailsEditActive(true))
                }
              >
                Edit details
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PostIntro;
