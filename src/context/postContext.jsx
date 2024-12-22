import { createContext, useContext, useEffect, useReducer } from "react";
import postReducer from "./postReducer";
import useLocalStorage from "../hooks/useLocalStorage";
import useIndexedDB from "../hooks/useIndexedDB";

//Create Context
const PostContext = createContext();

// Provider Component
export const PostProvider = ({ children }) => {
  const [storedUser, setStoredUser] = useIndexedDB("user", {});
  const [storedUsers, setStoredUsers] = useIndexedDB("users", []);

  const initialState = {
    user: storedUser || {}, // Fallback to empty object if null
    users: storedUsers || [], // Fallback to empty array if null
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Sync with local storage
  useEffect(() => {
    setStoredUsers(state.users);
  }, [state.users]);

  useEffect(() => {
    setStoredUser(state.user);
  }, [state.user]);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom Hook to Use Context
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
