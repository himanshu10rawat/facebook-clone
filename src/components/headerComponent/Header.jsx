import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { MdKeyboardBackspace, MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdNotifications, IoIosSearch, IoMdClose } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import style from "./header.module.css";
import { usePostContext } from "../../context/postContext";
import HeaderModal from "../headerModalComponent/HeaderModal";
import { GoHomeFill } from "react-icons/go";
import { BsFillPlayBtnFill } from "react-icons/bs";

const Header = () => {
  const [headerModal, setHeaderModal] = useState(false);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchUsersList, setSearchUsersList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [openModalFor, setOpenModalFor] = useState("");
  const [activeNav, setActiveNav] = useState("");

  const { state, dispatch } = usePostContext();
  const loginUser = state.users.find(
    (singleUser) => singleUser.userId === state.user.userId
  );

  const searchModal = useRef(null);

  document.addEventListener("mousedown", (event) => {
    if (searchModal.current && !searchModal.current.contains(event.target)) {
      setSearchBarActive(false);
    }
  });

  const location = useLocation();

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location.pathname]);

  const handleSearchChange = (event) => {
    const searchInput = event.target.value;
    setSearchValue(searchInput);

    const searchUsers = state.users.filter((user) =>
      user.firstName
        .toLowerCase()
        .startsWith(searchInput.length !== 0 && searchInput.toLowerCase())
    );

    setSearchUsersList(searchUsers);
  };

  const editSearchList = () => {
    const searchUsers = state.users.filter((user) =>
      user.firstName
        .toLowerCase()
        .startsWith(searchValue.length !== 0 && searchValue.toLowerCase())
    );
    setSearchUsersList(searchUsers);
  };

  const handleNotificationSeen = () => {
    dispatch({
      type: "NOTIFICATION",
      payload: {
        userId: state.user.userId,
        notifications: 0,
      },
    });
  };

  return (
    <>
      <header className={style["header-section"]}>
        <div
          ref={searchModal}
          className={`${style["searchListStyle"]} ${
            searchBarActive && style["searchListStyleOpen"]
          }`}
        >
          <div className={style["left-side"]}>
            {searchBarActive ? (
              <div
                role="button"
                aria-label="close search bar"
                tabIndex={0}
                className={style["back-button"]}
                onClick={() => {
                  setSearchBarActive(false);
                  setSearchUsersList([]);
                }}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") {
                    setSearchBarActive(false);
                  }
                }}
              >
                <MdKeyboardBackspace />
              </div>
            ) : (
              <Link to={"/"}>
                <FaFacebook />
              </Link>
            )}

            <div
              onClick={() => {
                setSearchBarActive(true);
                if (searchValue.length !== 0) {
                  editSearchList();
                }
              }}
              onKeyDown={(event) => {
                if (event.key === " " || event.key === "Enter") {
                  setSearchBarActive(true);
                  if (searchValue.length !== 0) {
                    editSearchList();
                  }
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Search Fakebook"
              className={`${style["search-button"]} ${style["setWidth"]}`}
            >
              {!searchBarActive && <IoIosSearch />}
              <input
                onChange={handleSearchChange}
                value={searchValue}
                type="search"
                name="search"
                id="search"
                placeholder="Search Fakebook"
                aria-label="Search option on facebook"
              />
            </div>
          </div>
          {searchBarActive && (
            <div className={style["search-list"]}>
              {searchUsersList.length === 0 ? (
                <div className={style["no-recent-searches"]}>
                  No recent searches
                </div>
              ) : (
                searchUsersList.map((searchUser) => {
                  return (
                    <Link
                      to={`/${searchUser.userId}`}
                      className={style["search-user"]}
                      key={searchUser.userId}
                      onClick={() => {
                        setSearchBarActive(false);
                        setSearchValue("");
                        setSearchUsersList([]);
                      }}
                    >
                      <div className={style["user-profile-pic"]}>
                        {searchUser.profilePic ? (
                          <img
                            src={searchUser.profilePic}
                            alt={
                              searchUser.firstName +
                              " " +
                              searchUser.lastName +
                              "profile pic"
                            }
                          />
                        ) : (
                          <FaUserCircle />
                        )}
                      </div>
                      <div className={style["user-name"]}>
                        {searchUser.firstName + " " + searchUser.lastName}
                      </div>
                      <div className={style["remove-search-user"]}>
                        <IoMdClose />
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          )}
        </div>
        <nav className={style["navbar-items"]}>
          <ul>
            <li>
              <NavLink
                to={"/"}
                role="link"
                tabIndex={0}
                aria-label="Home"
                className={({ isActive }) => {
                  return isActive ? style["link-active"] : "";
                }}
              >
                {activeNav === "/" ? <GoHomeFill /> : <BiHomeAlt />}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/watch"}
                role="link"
                tabIndex={0}
                aria-label="Video"
                className={({ isActive }) => {
                  return isActive ? style["link-active"] : "";
                }}
              >
                {activeNav === "/watch" ? (
                  <BsFillPlayBtnFill />
                ) : (
                  <MdOutlineOndemandVideo />
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={style["right-side"]}>
          <ul>
            <li>
              <div aria-label="Messenger" role="button" tabIndex={0}>
                <FaFacebookMessenger />
              </div>
            </li>
            <li>
              <div
                id="notifications"
                aria-label="Notifications"
                role="button"
                tabIndex={0}
                onClick={() => {
                  setHeaderModal((prev) => !prev);
                  setOpenModalFor("notifications");
                  handleNotificationSeen();
                }}
              >
                {loginUser?.notifications > 0 && (
                  <span className={style["notification-count"]}>
                    {loginUser.notifications}
                  </span>
                )}
                <IoMdNotifications />
              </div>
            </li>
            <li className={style["profile-icon"]}>
              <div
                id="profile"
                aria-label="Your profile"
                role="button"
                tabIndex={0}
                onClick={() => {
                  setHeaderModal((prev) => !prev);
                  setOpenModalFor("profile");
                }}
              >
                {loginUser?.profilePic ? (
                  <img
                    src={loginUser.profilePic}
                    alt={
                      loginUser.firstName +
                      " " +
                      loginUser.lastName +
                      " " +
                      "profile pic"
                    }
                  />
                ) : (
                  <FaUserCircle />
                )}
              </div>
            </li>
          </ul>
        </div>
      </header>
      {headerModal && (
        <HeaderModal
          setHeaderModal={setHeaderModal}
          openModalFor={openModalFor}
        />
      )}
    </>
  );
};

export default Header;
