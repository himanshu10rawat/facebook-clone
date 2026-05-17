
import style from "./photo.module.css";
import { MdEdit } from "react-icons/md";
import { usePostContext } from "../../context/postContext";
import { runOnKeyboardAction, showToast } from "../../utils/feedback";

const Photos = ({ post, user, postIndex }) => {
  const { dispatch } = usePostContext();

  const handleEditPhoto = (event) => {
    event.stopPropagation();
    const title = window.prompt("Photo caption", post.title || "");

    if (title === null) return;

    dispatch({
      type: "UPDATE_POST",
      payload: {
        userId: user.userId,
        postIndex,
        post: {
          ...post,
          title,
        },
      },
    });
    showToast("Photo caption updated");
  };

  const handleOpenPhoto = () => {
    window.open(post.postImage, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {post.postImage && (
        <div
          className={style["photo"]}
          role="button"
          tabIndex={0}
          aria-label="Open photo"
          onClick={handleOpenPhoto}
          onKeyDown={(event) => runOnKeyboardAction(event, handleOpenPhoto)}
        >
          <img src={post.postImage} alt={post.title} />
          <span
            role="button"
            aria-label="Edit photo"
            tabIndex={0}
            className={style["edit-button"]}
            onClick={handleEditPhoto}
            onKeyDown={(event) =>
              runOnKeyboardAction(event, () => handleEditPhoto(event))
            }
          >
            <MdEdit />
          </span>
        </div>
      )}
    </>
  );
};

export default Photos;
