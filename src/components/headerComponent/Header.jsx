import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaFacebookMessenger, FaUser } from "react-icons/fa";
import { MdOutlineOndemandVideo, MdGroups } from "react-icons/md";
import { IoMdNotifications, IoIosSearch } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiGamepadLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import style from "./header.module.css";
import { IoLogOut } from "react-icons/io5";
import { context } from "../../context/postContext";

const Header = () => {
  const { userContext } = context();
  const { user, setUser } = userContext;

  const handleLogout = () => {
    setUser({});
  };
  return (
    <>
      <header className={style["header-section"]}>
        <div className={style["left-side"]}>
          <Link>
            <FaFacebook />
          </Link>
          <form>
            <IoIosSearch />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Facebook"
              aria-label="Search option on facebook"
            />
          </form>
        </div>
        <nav className={style["navbar-items"]}>
          <ul>
            <li>
              <Link role="link" tabIndex={0} aria-label="Home">
                <BiHomeAlt />
              </Link>
            </li>
            <li>
              <Link role="link" tabIndex={0} aria-label="Video">
                <MdOutlineOndemandVideo />
              </Link>
            </li>
            <li>
              <Link role="link" tabIndex={0} aria-label="Marketplace">
                <AiOutlineShop />
              </Link>
            </li>
            <li>
              <Link role="link" tabIndex={0} aria-label="Groups">
                <HiOutlineUserGroup />
              </Link>
            </li>
            <li>
              <Link role="link" tabIndex={0} aria-label="Gamming">
                <RiGamepadLine />
              </Link>
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
              <div aria-label="Your profile" role="button" tabIndex={0}>
                <img src="/dummy-profile-image.webp" alt="user profile image" />
              </div>
            </li>
          </ul>
        </div>
      </header>
      <div className={style["header-modal"]}>
        <div className={style["user-profile"]}>
          <div className={style["user-image"]}>
            {user.profilePic ? (
              <img
                src="/dummy-profile-image.webp"
                alt={user.firstName + " " + user.lastName + " " + "profile pic"}
              />
            ) : (
              <FaUserCircle />
            )}
          </div>
          <div className={style["user-name"]}>
            {user.firstName + " " + user.lastName}
          </div>
        </div>
        <div
          className={style["button"]}
          role="button"
          tabIndex={0}
          onClick={handleLogout}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && handleLogout()
          }
        >
          <span className={style["icon"]}>
            <IoLogOut />
          </span>
          <span className={style["text"]}>Log out</span>
        </div>
      </div>
    </>
  );
};

export default Header;
