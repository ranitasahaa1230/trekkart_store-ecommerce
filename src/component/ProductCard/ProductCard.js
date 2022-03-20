import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"

export function ProductCard({ product }) {
  const {
    _id: id,
    alt,
    img,
    description,
    newPrice,
    originalPrice,
    isBestSeller,
    rating,
  } = product;
  return (
    <div class="section-main">
         <div class="cards">
              <div class="img-container">
                <Link to="/">
                  <img
                    src={img} alt={alt}
                    class="grid-col-img cards-img"
                /></Link>
              </div>
              
              <div class="card-content padding-s">
                <h3 class="card-grid">
                  Stylish Bags <i class="fas fa-heart cards-icon"></i>
                </h3>

                <span class="cards-desc">{description}</span>

                <div class="sm-gap">
                  <span class="txt-bold"> Rs.{newPrice}</span>
                  <span class="txt-crossed-off">Rs.{originalPrice}</span>
                  <span class="txt-high-light">10% Off</span>
                </div>

                <div class="card-footer">
                  <a href="./cart.html"
                    ><button class="btn btn-text-icon-primary grid-cards-icons">
                      <span class="btn-card-icon"
                        ><i class="fas fa-shopping-cart"></i> </span>Add to Cart
                    </button>
                  </a>
                </div>
              </div>
              <span class="tag">New</span>
            </div>
            </div>
  );
}


          
