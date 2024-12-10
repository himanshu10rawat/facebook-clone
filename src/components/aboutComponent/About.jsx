import React from "react";
import style from "./about.module.css";
import { NavLink, Outlet, useLocation, useParams } from "react-router";

const About = () => {
  const locationUrl = useLocation();
  const currentUrl = locationUrl.pathname;

  const params = useParams();
  const userId = params.userId;

  return (
    <div className={style["about"]}>
      <div className={style["about-left"]}>
        <h2>About</h2>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive || currentUrl === `/${userId}/about`
                  ? style["active-tab"]
                  : ""
              }
              to={`/${userId}/about_overview`}
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={`/${userId}/about_work_and_education`}
            >
              Work and education
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={`/${userId}/about_places`}
            >
              Placed lived
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={`/${userId}/about_contact_and_basic_info`}
            >
              Contact and basic info
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={`/${userId}/about_family_and_relationships`}
            >
              Family and relationships
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={`/${userId}/about_details`}
            >
              Details about you
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? style["active-tab"] : ""
              }
              to={`/${userId}/about_life_events`}
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
