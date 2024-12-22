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

// Provider Component
export const PostProvider = ({ children }) => {
  const [storedUser, setStoredUser] = useIndexedDB("user", null); // Start with null
  const [storedUsers, setStoredUsers] = useIndexedDB("users", null); // Start with null
  const [isInitialized, setIsInitialized] = useState(false);

  const initialState = {
    user: {},
    users: [],
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Effect to initialize state after IndexedDB data is ready
  useEffect(() => {
    if (storedUser !== null && storedUsers !== null) {
      dispatch({
        type: "SET_INITIAL_STATE",
        payload: { user: storedUser, users: storedUsers },
      });
      setIsInitialized(true);
    }
  }, [storedUser, storedUsers]);

  // Sync with IndexedDB when state changes
  useEffect(() => {
    if (isInitialized) {
      setStoredUsers(state.users);
    }
  }, [state.users, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      setStoredUser(state.user);
    }
  }, [state.user, isInitialized]);

  // Show a loading state until IndexedDB is ready
  if (!isInitialized) {
    return <div>Loading...</div>;
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
