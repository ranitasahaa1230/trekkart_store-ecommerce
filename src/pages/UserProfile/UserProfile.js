import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';
import { useDocumentTitle, useToast } from '../../hooks';
import "./UserProfile.css";

export function UserProfile() {
  useDocumentTitle("User Profile Page");
  const {
    state: { user },dispatch,
  } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch({type:"LOG_OUT"});
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    showToast("success","Logged Out!");
  };

  return (
    <div className="wishlist-section">
    <div className="profile__details">
    <h1 className="details-acc">Account Details</h1>
    <div className="box__page">
      <div className="profile__account">Your Profile</div>
      <div className="label__block">
        <label className="label__block__details">
          Full Name :{" "}
          <span className="account__profile">
            {user?.firstName} {user?.lastName}
          </span>
        </label>
      </div>
      <div className="label__block">
        <label className="label__block__details">
          Email Address :{" "}
          <span className="account__profile">{user?.email}</span>
        </label>
      </div>
      <div className="profile__account">Account Settings</div>
      <button className="logout__btn" onClick={logoutHandler}>
        LogOut
      </button>
    </div>
  </div>
  </div>
);
};