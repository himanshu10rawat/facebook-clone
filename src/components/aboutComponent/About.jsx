import React from "react";
import style from "./about.module.css";
import { NavLink, Outlet, useLocation } from "react-router";

const About = () => {
  const locationUrl = useLocation();
  const currentUrl = locationUrl.pathname;
  console.log("currentUrl", currentUrl);

  return (
    <div className={style["about"]}>
      <div className={style["about-left"]}>
        <h2>About</h2>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive || currentUrl === "/profile/about"
                  ? style["active-tab"]
                  : ""
              }
              to={"/profile/about_overview"}
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={"/profile/about_work_and_education"}
            >
              Work and education
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={"/profile/about_places"}
            >
              Placed lived
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={"/profile/about_contact_and_basic_info"}
            >
              Contact and basic info
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={"/profile/about_family_and_relationships"}
            >
              Family and relationships
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={"/profile/about_details"}
            >
              Details about you
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={"/profile/about_life_events"}
            >
              Life events
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style["about-right"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
