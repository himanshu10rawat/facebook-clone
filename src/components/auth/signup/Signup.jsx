import React, { useState } from "react";
import style from "./signup.module.css";
import {
  currentDate,
  currentMonth,
  currentYear,
  dateList,
  monthsList,
  yearList,
} from "../../dateComponent/Date";
import { context } from "../../../context/postContext";

const Signup = ({ setIsRegistered }) => {
  const [error, setError] = useState("");
  const { userContext, usersContext } = context();
  const { setUser } = userContext;
  const { users, setUsers } = usersContext;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: currentDate,
    birthMonth: monthsList[currentMonth],
    birthYear: currentYear,
    gender: "",
    mobileEmail: "",
    password: "",
  });
  const handleAlreadyHaveAccount = () => {
    setIsRegistered(true);
  };

  const handleInputChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userExists = users.find(
      (user) => user.mobileEmail === formData.mobileEmail
    );

    if (userExists) {
      setError(
        "You have already registered with this email address or phone number."
      );
      return;
    }
    const updatedformData = {
      ...formData,
      userId:
        formData.firstName.toLocaleLowerCase() +
        Math.floor(Math.random() * 1234),
    };
    const updatedUsers = [...users, updatedformData];
    setUsers(updatedUsers);
    const { mobileEmail, userId, password } = updatedformData;
    setUser({ mobileEmail, userId, password });

    console.log("User saved successfully", updatedformData);

    setFormData({
      firstName: "",
      lastName: "",
      birthDate: currentDate,
      birthMonth: monthsList[currentMonth],
      birthYear: currentYear,
      gender: "",
      mobileEmail: "",
      password: "",
    });
  };
  return (
    <>
      <div className={style["modal-header"]}>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <h2>Create a new account</h2>
        <p>It's quick and easy.</p>
      </div>
      <div className={style["modal-body"]}>
        <form onSubmit={handleFormSubmit}>
          <div className={style["nameInput-group"]}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              required
              aria-label="First name"
              onChange={handleInputChange}
              value={formData.firstName}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              required
              aria-label="Last name"
              onChange={handleInputChange}
              value={formData.lastName}
            />
          </div>
          <div className={style["select-group"]}>
            <div className={style["input-title"]}>Date of birth</div>
            <div className={style["input-row"]}>
              <select
                name="birthDate"
                id="birthDate"
                aria-label="Select your date of birth"
                required
                onChange={handleInputChange}
                value={formData.birthDate}
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
                aria-label="Select your month of birth"
                required
                onChange={handleInputChange}
                value={formData.birthMonth}
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
                aria-label="Select your year of birth"
                required
                onChange={handleInputChange}
                value={formData.birthYear}
              >
                {yearList &&
                  yearList.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className={style["radio-group"]}>
            <div className={style["input-title"]}>Gender</div>
            <div className={style["input-row"]}>
              <label htmlFor="female">
                Female
                <input
                  value={"Female"}
                  type="radio"
                  name="gender"
                  id="female"
                  aria-label="Gender female"
                  required
                  onChange={handleInputChange}
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
                  required
                  onChange={handleInputChange}
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
                  required
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>
          <div className={style["input-group"]}>
            <input
              type="text"
              name="mobileEmail"
              id="mobileEmail"
              placeholder="Mobile number or email address"
              aria-label="Enter mobile number or email address"
              required
              onChange={handleInputChange}
              value={formData.mobileEmail}
            />
          </div>
          <div className={style["input-group"]}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              aria-label="Create your password"
              required
              onChange={handleInputChange}
              value={formData.password}
              autoComplete={formData.password}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className={style["modal-footer"]}>
        <span
          role="button"
          tabIndex={0}
          aria-label="Already have and account?"
          onClick={handleAlreadyHaveAccount}
          onKeyDown={(e) =>
            (e.key === "Enter" || e.key === " ") && handleAlreadyHaveAccount()
          }
        >
          Already have and account?
        </span>
      </div>
    </>
  );
};

export default Signup;
