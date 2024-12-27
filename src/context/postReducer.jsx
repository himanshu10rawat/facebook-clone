const postReducer = (state, action) => {
  const { userId, posts, profilePic, bgImage, bio } = action.payload;
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
          user.userId === userId ? { ...user, profilePic } : user
        ),
      };
    case "ADD_BG_IMAGE":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId ? { ...user, bgImage } : user
        ),
      };
    case "BIO_ADD":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId ? { ...user, bio: bio } : user
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
