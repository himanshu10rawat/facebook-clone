import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdNotifications, IoIosSearch } from "react-icons/io";
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
  const { state } = usePostContext();
  const loginUser = state.users.find(
    (singleUser) => singleUser.userId === state.user.userId
  );

  const [headModal, setHeadModal] = useState(false);
  return (
    <>
      <header className={style["header-section"]}>
        <div className={style["left-side"]}>
          <Link to={"/"}>
            <FaFacebook />
          </Link>
          <div
            role="button"
            tabIndex={0}
            aria-label="Search Facebook"
            className={style["search-button"]}
          >
            <IoIosSearch />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search Facebook"
              aria-label="Search option on facebook"
            />
          </div>
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
