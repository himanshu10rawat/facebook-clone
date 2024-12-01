import { createContext, useReducer, useState } from "react";
import { postData } from "../database/postData";
import postReducer from "./postReducer";

const initialState = { postData };

//Create Context
export const PostContext = createContext();

// Provider Component
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <PostContext.Provider
      value={{ post: { state, dispatch }, login: { isLogin, setIsLogin } }}
    >
      {children}
    </PostContext.Provider>
  );
};
