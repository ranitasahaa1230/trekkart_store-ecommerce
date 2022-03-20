import React from 'react'
import "./Footer.css"

export function Footer() {
  return (
    <footer>
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Our Stores</h3>
          <a href="#">India</a>
          <a href="#">USA</a>
          <a href="#">Japan</a>
          <a href="#">Paris</a>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="#brands">Featured Brands</a>
          <a href="#review">Reviews</a>
        </div>

        <div className="box">
          <h3>Extra Links</h3>
          <a href="#">My Account</a>
          <a href="#">My Favorite</a>
          <a href="#">My 0rders</a>
          <a href="#newsletter">Newsletter</a>
        </div>

        <div className="box">
          <h3>Social Media</h3>
          <a href="https://github.com/ranitasahaa1230/trekkart_store-ecommerce"
            >Github</a>
          <a href="https://twitter.com/Ifullofsunshine">Twitter</a>
          <a href="https://www.instagram.com/suitcase_full_of_sunshine/"
            >Instagram</a>
          <a href="https://www.linkedin.com/in/saharanitaa1230dreamer/"
            >Linkedin</a>
        </div>

        <div className="credit">
          Made with 💕 by Ranita Saha || © 2022 Trekkart Store. All rights
          reserved.
        </div>
      </div>
    </div>
  </footer>
  )
}
