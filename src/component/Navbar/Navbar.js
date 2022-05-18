import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useAuth, useData } from "../../contexts";
import { FaAngleRight } from "react-icons/fa";

export function Navbar() {
  const {
    cartState: { cart, wishList },
    dispatch,
  } = useData();
  const { pathname } = useLocation();
  const {
    state: { isAuth, user },
  } = useAuth();

  return (
    <div>
      <header>
        <div id="menu-bar" className="fas fa-bars menu-bar"></div>
        <div className="logo-header">
          <img src={logo} alt="logo" className="logo-design" />
          <Link to="/" className="logo">
            Trekkart Stores
          </Link>
        </div>

        <nav className="navbar">
          <Link to="/" className="href">
            Home
          </Link>
          <Link to="/products" className="href">
            Shop Now
          </Link>
        </nav>

        {pathname === "/products" && (
          <form className="class-form">
            <input
              type="search"
              id="search-bar"
              className="search-input"
              placeholder="Search for products, brands and more..."
              onChange={(e) =>
                dispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })
              }
            />
            <label
              htmlFor="search-bar"
              className="fas fa-search search-label"
            ></label>
          </form>
        )}

        <div className="font-icons">
          <span className="font__icons__span">
            <Link to="/wishlist">
              <span className="badges-container">
                <i className="fas fa-heart"></i>
                <span className="badge-number">{wishList.length}</span>
              </span>
            </Link>

            <Link to="/cart">
              <span className="badges-container">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge-number">{cart.length}</span>
              </span>
            </Link>
          </span>

          {isAuth ? (
            <Link to="/userProfile" className="header__icons">
              <span className="header__user">
                {user?.firstName}
                <FaAngleRight size={22} />
              </span>
              <button id="header__logout" className="header__logout">View Profile</button>
            </Link>
          ) : (
            <Link to="/login">
              <div className="header__icons">
                <i className="fa-solid fa-user"></i>
                <span className="font__icons">LOGIN</span>
              </div>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}
