import { createContext, useReducer } from "react";
import { postData } from "../database/postData";
import postReducer from "./postReducer";

const initialState = { postData };

//Create Context
export const PostContext = createContext();

// Provider Component
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
