import React from "react";
import style from "./signup.module.css";
import {
  currentDate,
  currentMonth,
  currentYear,
  dateList,
  monthsList,
  yearList,
} from "../../dateComponent/Date";

const Signup = () => {
  return (
    <>
      <div className={style["modal-header"]}>
        <h2>Create a new account</h2>
        <p>It's quick and easy.</p>
      </div>
      <div className={style["modal-body"]}>
        <form>
          <div className={style["input-group"]}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              required
              aria-label="First name"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              required
              aria-label="Last name"
            />
          </div>
          <div className={style["input-group"]}>
            <select
              name="birthDate"
              id="birthDate"
              defaultValue={currentDate}
              aria-label="Select your date of birth"
            >
              {dateList &&
                dateList.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
            </select>
            <select
              name="birthMonth"
              id="birthMonth"
              defaultValue={monthsList[currentMonth]}
              aria-label="Select your month of birth"
            >
              {monthsList &&
                monthsList.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
            </select>
            <select
              name="birthYear"
              id="birthYear"
              defaultValue={currentYear}
              aria-label="Select your year of birth"
            >
              {yearList &&
                yearList.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
            </select>
          </div>
          <div className={style["input-group"]}>
            <label htmlFor="female">
              Female
              <input
                value={"Female"}
                type="radio"
                name="gender"
                id="female"
                aria-label="Gender female"
              />
            </label>
            <label htmlFor="male">
              Male
              <input
                value={"Male"}
                type="radio"
                name="gender"
                id="male"
                aria-label="Gender male"
              />
            </label>
            <label htmlFor="other">
              Other
              <input
                value={"Other"}
                type="radio"
                name="gender"
                id="other"
                aria-label="Gender other"
              />
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
