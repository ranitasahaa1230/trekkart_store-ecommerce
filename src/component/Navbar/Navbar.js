import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import "./Navbar.css"
import logo from "../../assets/images/logo.png"
import { useData } from '../../contexts'

export function Navbar() {
  const {
    cartState: { cart,wishList },dispatch
  } = useData()
  const { pathname } = useLocation();
  
  return (
    <div>
      <header>
      <div id="menu-bar" className="fas fa-bars menu-bar"></div>
      <div className="logo-header">
        <img src={logo} alt="logo" className="logo-design"/>
        <a href="/" className="logo">Trekkart Store</a>
      </div>

      <nav className="navbar">
        <Link to="/" className="href">Home</Link>
        <Link to="/products" className="href">Shop Now</Link>
      </nav>

      {pathname ==="/products" && (
        <form  className="class-form">
        <input
          type="search"
          id="search-bar"
          className="search-input"
          placeholder="Search for products, brands and more..."
          onChange={(e)=>dispatch({type:"FILTER_BY_SEARCH",payload:e.target.value})}
        />
        <label htmlFor="search-bar" className="fas fa-search search-label"></label>
      </form>
      )}

      <div className="font-icons">
        <Link to="/login">
            <span className="badges-container"><i className="fas fa-user"></i>
            </span>
        </Link>

        <Link to="/wishlist">
        <span className="badges-container"><i className="fas fa-heart"></i>
                <span className="badge-number">{wishList.length}</span>
            </span>
        </Link>
        <Link to="/cart">
        <span className="badges-container"><i className="fas fa-shopping-cart"></i>
                <span className="badge-number">{cart.length}</span>
            </span>
        </Link>
      </div>
    </header>
    </div>
  )
}
