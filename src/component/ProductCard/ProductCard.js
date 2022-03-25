import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts";
import "./ProductCard.css";
import {
  calcPercentage,
  isProductInWishlist,
  isProductInCart,
} from "../../utilities/index";

export function ProductCard({ product }) {
  const {
    cartState: { cart },
    cartDispatch,
  } = useData();

  const {
    _id: id,
    alt,
    img,
    name,
    // description,
    newPrice,
    originalPrice,
    brand,
    ratings,
  } = product;

  const isInCart = isProductInCart(cart, id);
  // const isInWishlist = isProductInWishlist(wishlist, id)

  return (
    <div className="section-main" key={id}>
      <div className="cards">
        <div className="img-container">
          <Link to="/">
            <img src={img} alt={alt} className="grid-col-img cards-img" />
          </Link>
        </div>

        <div className="card-content padding-s">
          <h3 className="card-grid">
            {name}
            <span className="cards-rating">
              {ratings}
              <i className="fa-solid fa-star star-rating"></i>
            </span>
          </h3>

          <div className="sm-gap">
            <span className="txt-bold">
              ₹{new Intl.NumberFormat("en-IN").format(newPrice)}
            </span>
            <span className="txt-crossed-off">
              ₹{new Intl.NumberFormat("en-IN").format(originalPrice)}
            </span>
            <span className="txt-high-light">10% Off</span>
            <div className="brand-name">
              <b>Brand: </b>
              <em className="brand-italic">{brand}</em>
            </div>
          </div>

          <div className="card-footer">
            {isInCart ? (
              <Link to="/cart">
                <button className="btn btn-text-icon-primary grid-cards-icons">
                  <span className="btn-card-icon">
                    <i className="fas fa-shopping-cart"></i>{" "}
                  </span>
                  Go to Cart
                </button>
              </Link>
            ) : (
              <button
                className="btn btn-text-icon-primary grid-cards-icons"
                onClick={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: product })
                }
              >
                <span className="btn-card-icon">
                  <i className="fas fa-shopping-cart"></i>{" "}
                </span>
                Add to Cart
              </button>
            )}
           
          </div>
        </div>
        <span className="tag">New</span>
        <span>
          <i className="fas fa-heart cards-icon"></i>
        </span>
      </div>
    </div>
  );
}
