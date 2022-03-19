import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
        <header>
      <div id="menu-bar" className="fas fa-bars menu-bar"></div>
      <div className="logo-header">
        <img src={require('../../assets/images/logo.png')} alt="logo" className="logo-design"/>
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
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-shopping-cart"></a>
        <a href="#" className="fas fa-user"></a>
      </div>
    </header>
    </div>
  )
}
