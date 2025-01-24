const postReducer = (state, action) => {
  const {
    userId,
    posts,
    profilePic,
    bgImage,
    bio,
    friendRequest,
    notifications,
    friendList,
  } = action.payload;
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
    case "FRIEND_REQUEST":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId ? { ...user, friendRequest } : user
        ),
      };
    case "NOTIFICATION":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId ? { ...user, notifications } : user
        ),
      };
    case "ADD_FRIEND":
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === userId ? { ...user, friendList } : user
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
