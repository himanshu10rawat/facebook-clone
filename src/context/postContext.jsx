import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import postReducer from "./postReducer";
import useIndexedDB from "../hooks/useIndexedDB";

// Create Context
const PostContext = createContext();
const EMPTY_USER = {};
const EMPTY_USERS = [];

// Provider Component
export const PostProvider = ({ children }) => {
  const [storedUser, setStoredUser, isStoredUserReady] = useIndexedDB(
    "user",
    EMPTY_USER
  );
  const [storedUsers, setStoredUsers, isStoredUsersReady] = useIndexedDB(
    "users",
    EMPTY_USERS
  );
  const [isInitialized, setIsInitialized] = useState(false);

  const initialState = {
    user: {},
    users: [],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Effect to initialize state after IndexedDB data is ready
  useEffect(() => {
    if (!isInitialized && isStoredUserReady && isStoredUsersReady) {
      dispatch({
        type: "SET_INITIAL_STATE",
        payload: {
          user: storedUser || EMPTY_USER,
          users: Array.isArray(storedUsers) ? storedUsers : EMPTY_USERS,
        },
      });
      setIsInitialized(true);
    }
  }, [
    isInitialized,
    isStoredUserReady,
    isStoredUsersReady,
    storedUser,
    storedUsers,
  ]);

  // Sync with IndexedDB when state changes
  useEffect(() => {
    if (isInitialized) {
      setStoredUsers(state.users);
    }
  }, [state.users, isInitialized, setStoredUsers]);

  useEffect(() => {
    if (isInitialized) {
      setStoredUser(state.user);
    }
  }, [state.user, isInitialized, setStoredUser]);

  // Show a loading state until IndexedDB is ready
  if (!isInitialized) {
    return (
      <h1
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading...
      </h1>
    );
  }

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
