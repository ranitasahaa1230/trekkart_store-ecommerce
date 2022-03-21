import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"

export function ProductCard({ product }) {
  const {
    _id: id,
    alt,
    img,
    // description,
    newPrice,
    originalPrice,
    // isBestSeller,
    rating,
  } = product;
  return (
    <div className="section-main" key={id}>
         <div className="cards">
              <div className="img-container">
                <Link to="/">
                  <img
                    src={img} alt={alt}
                    className="grid-col-img cards-img"
                /></Link>
              </div>
              
              <div className="card-content padding-s">
                <h3 className="card-grid">
                  Stylish Bags<span className="cards-rating">{rating}<i className="fa-solid fa-star star-rating"></i></span>

                </h3>

                <div className="sm-gap">
                  <span className="txt-bold"> Rs.{newPrice}</span>
                  <span className="txt-crossed-off">Rs.{originalPrice}</span>
                  <span className="txt-high-light">10% Off</span>
                </div>

                <div className="card-footer">
                  <a href="./cart.html"
                    ><button className="btn btn-text-icon-primary grid-cards-icons">
                      <span className="btn-card-icon"
                        ><i className="fas fa-shopping-cart"></i> </span>Add to Cart
                    </button>
                  </a>
                </div>
              </div>
              <span className="tag">New</span>
              <span><i className="fas fa-heart cards-icon"></i></span>

            </div>
            </div>
  );
}


          
