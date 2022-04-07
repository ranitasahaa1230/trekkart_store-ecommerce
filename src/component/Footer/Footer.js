import React from 'react'
import "./Footer.css"

export function Footer() {
  return (
    <footer>
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Our Stores</h3>
          <span>India</span>
          <span>USA</span>
          <span>Japan</span>
          <span>Paris</span>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <a href="https://trekkart-stores.netlify.app/">Home</a>
          <a href="#categories">Products</a>
          <a href="#brands">Featured Brands</a>
          <a href="#review">Reviews</a>
        </div>

        <div className="box">
          <h3>Extra Links</h3>
          <a href="https://trekkart-stores.netlify.app/">My Account</a>
          <a href="https://trekkart-stores.netlify.app/">My Favorite</a>
          <a href="https://trekkart-stores.netlify.app/">My 0rders</a>
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
