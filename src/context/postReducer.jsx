const postReducer = (state, action) => {
  const payload = action.payload || {};
  const {
    userId,
    posts,
    profilePic,
    bgImage,
    bio,
    friendRequest,
    notifications,
    friendList,
    postIndex,
    post,
  } = payload;
  const updateUser = (updates) => ({
    ...state,
    users: state.users.map((user) =>
      user.userId === userId ? { ...user, ...updates } : user
    ),
    user:
      state.user.userId === userId ? { ...state.user, ...updates } : state.user,
  });

  switch (action.type) {
    case "SET_INITIAL_STATE":
      return {
        ...state,
        user: action.payload.user,
        users: action.payload.users,
      };
    case "SIGN_UP":
      return { ...state, users: [...state.users, action.payload] };
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "LOG_OUT":
      return { ...state, user: action.payload };
    case "ADD_POST":
      return updateUser({ posts });
    case "UPDATE_POST":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId
            ? {
                ...user,
                posts: (user.posts || []).map((currentPost, index) =>
                  index === postIndex ? post : currentPost
                ),
              }
            : user
        ),
      };
    case "ADD_PROFILE_PIC":
      return updateUser({ profilePic });
    case "ADD_BG_IMAGE":
      return updateUser({ bgImage });
    case "BIO_ADD":
      return updateUser({ bio });
    case "UPDATE_PROFILE_DETAILS":
      return updateUser(payload);
    case "FRIEND_REQUEST":
      return updateUser({ friendRequest });
    case "NOTIFICATION":
      return updateUser({ notifications });
    case "ADD_FRIEND":
      return updateUser({ friendList });
    default:
      return state;
  }
};

export default postReducer;
