import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App";
import Home from "./pages/homePage/Home";
import { PostProvider } from "./context/postContext";
import UserProfile from "./pages/userProfile/UserProfile";
import PostTab from "./pages/userProfile/postsTab/PostTab";
import AboutTab from "./pages/userProfile/aboutTab/AboutTab";
import {
  ContactAndBasicInfo,
  DetailsAboutYou,
  FamilyAndRelationships,
  LifeEventa,
  Overview,
  PlacedLived,
  WorkAndEducation,
} from "./components/aboutDetailsComponent/AboutDetails";
import FriendsTab from "./pages/userProfile/friendsTab/FriendsTab";
import VideosTab from "./pages/userProfile/videosTab/videosTab";
import PhotosTab from "./pages/userProfile/photosTab/PhotosTab";
import NotFound404 from "./components/notFound404Component/NotFound404";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PostProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path=":userId" element={<UserProfile />}>
            <Route index element={<PostTab />} />
            <Route path="about" element={<AboutTab />}>
              <Route path="" element={<Overview />} />
            </Route>
            <Route path="about_overview" element={<AboutTab />}>
              <Route path="" element={<Overview />} />
            </Route>
            <Route path="about_work_and_education" element={<AboutTab />}>
              <Route path="" element={<WorkAndEducation />} />
            </Route>
            <Route path="about_places" element={<AboutTab />}>
              <Route path="" element={<PlacedLived />} />
            </Route>
            <Route path="about_contact_and_basic_info" element={<AboutTab />}>
              <Route path="" element={<ContactAndBasicInfo />} />
            </Route>
            <Route path="about_family_and_relationships" element={<AboutTab />}>
              <Route path="" element={<FamilyAndRelationships />} />
            </Route>
            <Route path="about_details" element={<AboutTab />}>
              <Route path="" element={<DetailsAboutYou />} />
            </Route>
            <Route path="about_life_events" element={<AboutTab />}>
              <Route path="" element={<LifeEventa />} />
            </Route>
            <Route path="friends" element={<FriendsTab />} />
            <Route path="videos" element={<VideosTab />} />
            <Route path="photos" element={<PhotosTab />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </PostProvider>
  </BrowserRouter>
);
