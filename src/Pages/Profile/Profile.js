import React, { useState } from "react";
import { AuthState } from "../../Contexts/Auth/AuthContext";
import "./Profile.css";
import { Address } from "./Components/Address";
import { NavLink } from "react-router-dom";

// Profile page of the user

export const Profile = () => {
  const [active, setActive] = useState("profile");

  const { setIsLoggedIn } = AuthState();

  // Getting user from localstorage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  const { firstName, lastName, email } = user;

  return (
    <>
      <div className="profile-container flex direction-column">
        <div className="profile-nav">
          <button
            className={`profile-tab-btn letter-spacing font-1-3 cursor-pointer ${
              active === "profile" && "active-tab"
            }`}
            onClick={() => setActive("profile")}
          >
            Profile
          </button>
          <button
            className={`profile-tab-btn letter-spacing font-1-3 cursor-pointer ${
              active === "address" && "active-tab"
            }`}
            onClick={() => setActive("address")}
          >
            Address
          </button>
        </div>

        <div className="profile-card flex direction-column ">
          {active === "profile" ? (
            <>
              <h2 className="profile-head margin-bottom-1">Profile Details</h2>
              <div className="flex bottom-margin-md">
                <p className="profile-label">Name</p>
                <p className="user-name">
                  {firstName} {lastName}
                </p>
              </div>
              <div className="flex margin-bottom-1">
                <p className="email-label">Email</p>
                <p className="user-email">{email}</p>
              </div>
              <NavLink
                to="/orderSummary"
                className="letter-spacing font-bold order-details-link underline"
              >
                Order History
              </NavLink>
              <button
                className="logout-btn cursor-pointer"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <Address />
          )}
        </div>
      </div>
    </>
  );
};
