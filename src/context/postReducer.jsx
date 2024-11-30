const postReducer = (state, action) => {
  console.log("state", state, "action", action);

  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        postData: [...state.postData, action.payload],
      };

    default:
      return state;
  }
};

export default postReducer;
