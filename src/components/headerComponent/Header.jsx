import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { MdKeyboardBackspace, MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdNotifications, IoIosSearch, IoMdClose } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiGamepadLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import style from "./header.module.css";
import { usePostContext } from "../../context/postContext";
import HeaderModal from "../headerModalComponent/HeaderModal";

const Header = () => {
  const [headModal, setHeadModal] = useState(false);
  const { state } = usePostContext();
  const loginUser = state.users.find(
    (singleUser) => singleUser.userId === state.user.userId
  );

  const [searchBarActive, setSearchBarActive] = useState(false);

  const [searchListStyle, setSearchListStyle] = useState({
    borderRadius: "0 0 1rem 1rem",
    position: "absolute",
    left: "0",
    paddingInline: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
  });

  const [searchUsersList, setSearchUsersList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  useEffect(() => {
    if (searchBarActive) {
      setSearchListStyle({
        ...searchListStyle,
        boxShadow: "0 10px 5px 5px rgba(221, 221, 221, 0.5)",
        backgroundColor: "#ffffff",
        paddingBottom: "0.5rem",
        top: "0",
        transform: "unset",
      });
    } else {
      setSearchListStyle({
        ...searchListStyle,
        boxShadow: "none",
        backgroundColor: "transparent",
        paddingBottom: "0",
        top: "50%",
        transform: "translateY(-50%)",
      });
    }
  }, [searchBarActive]);

  return (
    <>
      <header className={style["header-section"]}>
        <div style={searchListStyle}>
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
              <NavLink to={"/"} role="link" tabIndex={0} aria-label="Home">
                <BiHomeAlt />
              </NavLink>
            </li>
            <li>
              <NavLink role="link" tabIndex={0} aria-label="Video">
                <MdOutlineOndemandVideo />
              </NavLink>
            </li>
            <li>
              <NavLink role="link" tabIndex={0} aria-label="Marketplace">
                <AiOutlineShop />
              </NavLink>
            </li>
            <li>
              <NavLink role="link" tabIndex={0} aria-label="Groups">
                <HiOutlineUserGroup />
              </NavLink>
            </li>
            <li>
              <NavLink role="link" tabIndex={0} aria-label="Gamming">
                <RiGamepadLine />
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={style["right-side"]}>
          <ul>
            <li>
              <div aria-label="Menu" role="button" tabIndex={0}>
                <CgMenuGridR />
              </div>
            </li>
            <li>
              <div aria-label="Messenger" role="button" tabIndex={0}>
                <FaFacebookMessenger />
              </div>
            </li>
            <li>
              <Link aria-label="Notifications" role="link" tabIndex={0}>
                <IoMdNotifications />
              </Link>
            </li>
            <li>
              <div
                id="headerProfilePic"
                aria-label="Your profile"
                role="button"
                tabIndex={0}
                onClick={() => setHeadModal((prev) => !prev)}
              >
                {loginUser.profilePic ? (
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
      {headModal && <HeaderModal setHeadModal={setHeadModal} />}
    </>
  );
};

export default Header;
