import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import logo from "../../assets/images/logo.png"

export default function Header() {
  return (
    <div>
      <header>
      <div id="menu-bar" className="fas fa-bars menu-bar"></div>
      <div className="logo-header">
        <img src={logo} alt="logo" className="logo-design"/>
        <a href="/" className="logo">Trekkart Store</a>
      </div>

      <nav className="navbar">
        <a href="/" className="href">Home</a>
        <a href="./pages/products.html" className="href">Shop Now</a>
      </nav>

      <form  className="class-form">
        <input
          type="search"
          id="search-bar"
          className="search-input"
          placeholder="Search for products, brands and more..."
        />
        <label htmlFor="search-bar" className="fas fa-search search-label"></label>
      </form>

      <div className="font-icons">
        <Link to="/product.html" className="fas fa-heart"></Link>
        <Link to="/product.html" className="fas fa-shopping-cart"></Link>
        <Link to="/product.html" className="fas fa-user"></Link>
      </div>
    </header>
    </div>
  )
}
