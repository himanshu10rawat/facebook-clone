
import style from "./friend.module.css";
import { BsThreeDots } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { usePostContext } from "../../context/postContext";
import { runOnKeyboardAction, showToast } from "../../utils/feedback";

const Friend = ({ singleFriend }) => {
  const { state, dispatch } = usePostContext();

  const isLoginUser = state.user.userId === singleFriend.userId;

  const mutualFriends = singleFriend.friendList.filter((singleFriendId) => {
    return state.user.friendList?.some(
      (eachFriendId) => eachFriendId === singleFriendId
    );
  });

  const handleFriendOptions = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isLoginUser) {
      showToast("This is your profile");
      return;
    }

    const shouldRemove = window.confirm(
      `Remove ${singleFriend.firstName} ${singleFriend.lastName} from friends?`
    );

    if (!shouldRemove) return;

    dispatch({
      type: "ADD_FRIEND",
      payload: {
        userId: state.user.userId,
        friendList: (state.user.friendList || []).filter(
          (friendId) => friendId !== singleFriend.userId
        ),
      },
    });

    dispatch({
      type: "ADD_FRIEND",
      payload: {
        userId: singleFriend.userId,
        friendList: (singleFriend.friendList || []).filter(
          (friendId) => friendId !== state.user.userId
        ),
      },
    });

    showToast("Friend removed");
  };

  return (
    <>
      <Link to={`/${singleFriend.userId}`} className={style["friend-card"]}>
        <div className={style["profile"]}>
          <div className={style["profile-picture"]}>
            {singleFriend.profilePic ? (
              <img
                src={singleFriend.profilePic}
                alt={singleFriend.firstName + " " + singleFriend.lastName}
              />
            ) : (
              <FaUser />
            )}
          </div>
          <div className={style["profile-details"]}>
            <h3>{singleFriend.firstName + " " + singleFriend.lastName}</h3>
            {!isLoginUser && (
              <p>{mutualFriends && mutualFriends.length} mutual friends</p>
            )}
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          aria-label="Edit friend"
          className={style["edit-button"]}
          onClick={handleFriendOptions}
          onKeyDown={(event) =>
            runOnKeyboardAction(event, () => handleFriendOptions(event))
          }
        >
          <BsThreeDots />
        </div>
      </Link>
    </>
  );
};

export default Friend;
