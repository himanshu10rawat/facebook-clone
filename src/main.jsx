import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import Home from "./pages/homePage/Home";
import { PostProvider } from "./context/postContext";
import UserProfile from "./pages/userProfile/UserProfile";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PostProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </PostProvider>
  </BrowserRouter>
);
