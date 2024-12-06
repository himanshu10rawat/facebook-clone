import { createContext, useContext, useReducer } from "react";
import { postData } from "../database/postData";
import postReducer from "./postReducer";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = { postData };

//Create Context
const PostContext = createContext();

// Provider Component
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  const [user, setUser] = useLocalStorage("user", {});
  const [users, setUsers] = useLocalStorage("users", []);

  return (
    <PostContext.Provider
      value={{
        postContext: { state, dispatch },
        userContext: { user, setUser },
        usersContext: { users, setUsers },
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const context = () => useContext(PostContext);
