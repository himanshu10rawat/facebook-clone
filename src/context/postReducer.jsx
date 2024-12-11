const postReducer = (state, action) => {
  const { userId, posts, profilePic, bgImage } = action.payload;
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, users: [...state.users, action.payload] };
    case "LOG_IN":
      return { ...state, user: action.payload };
    case "ADD_POST":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId ? { ...user, posts } : user
        ),
      };
    case "ADD_PROFILE_PIC":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId ? { ...user, profilePic: profilePic } : user
        ),
      };
    case "ADD_BG_IMAGE":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId ? { ...user, bgImage: bgImage } : user
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
