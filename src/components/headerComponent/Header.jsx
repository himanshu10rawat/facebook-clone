import React from "react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style["header-section"]}>
      <div className="left-side">
        <Link>
          <FaFacebook />
        </Link>
        <form>
          <input
            type="search"
            name="search"
            id="search"
            aria-label="Search option on facebook"
          />
        </form>
      </div>
      <nav className="navbar-side">
        <ul>
          <li>
            <Link role="link" tabIndex={"0"} aria-label="Home">
              <GoHomeFill />
            </Link>
          </li>
          <li>
            <Link role="link" tabIndex={"0"} aria-label="Video">
              Video
            </Link>
          </li>
          <li>
            <Link role="link" tabIndex={"0"} aria-label="Marketplace">
              Marketplace
            </Link>
          </li>
          <li>
            <Link role="link" tabIndex={"0"} aria-label="Groups">
              Groups
            </Link>
          </li>
          <li>
            <Link role="link" tabIndex={"0"} aria-label="Gamming">
              Gamming
            </Link>
          </li>
        </ul>
      </nav>
      <div className="right-side">
        <ul>
          <li>
            <div aria-label="Menu" role="button" tabIndex={"0"}>
              Menu
            </div>
          </li>
          <li>
            <div aria-label="Messanger" role="button" tabIndex={"0"}>
              Menu
            </div>
          </li>
          <li>
            <Link aria-label="Notifications" role="link" tabIndex={"0"}>
              Menu
            </Link>
          </li>
          <li>
            <div aria-label="Your profile" role="button" tabIndex={"0"}>
              Menu
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
