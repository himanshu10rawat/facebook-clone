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
import style from "./header.module.css";

const Header = () => {
  return (
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
              <img
                src="https://scontent.fdel32-1.fna.fbcdn.net/v/t39.30808-1/417380866_2065772103790903_7360360743510704365_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=zchevvPK9jkQ7kNvgGsHOtL&_nc_zt=24&_nc_ht=scontent.fdel32-1.fna&_nc_gid=Ak-Q4NoTLlwEzceOT4EUSoV&oh=00_AYCK7kDfo3nIyof3GW51Qx_P70ychjlnEXeTIx_emEi7RQ&oe=67487850"
                alt="user profile image"
              />
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
