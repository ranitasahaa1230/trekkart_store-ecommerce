import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../contexts";
import "./ProductCard.css";
import {
  calcPercentage,
  isProductInWishlist,
  isProductInCart,
} from "../../utilities/index";
import { addToCart, addToWishlist, removeFromWishlist } from "../../services";
import { useToast,useDocumentTitle } from "../../hooks";

export function ProductCard({ product }) {
  const { showToast } = useToast();
  const {
    cartState: { cart, wishList },
    cartDispatch,
  } = useData();
  const [loader, setLoader] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate()

  const {
    _id: id,
    alt,
    img,
    name,
    newStock,
    // description,
    newPrice,
    originalPrice,
    brand,
    ratings,
    inStock,
  } = product;

  useDocumentTitle("Product Details");

  const isInCart = isProductInCart(cart, id);
  const isInWishlist = isProductInWishlist(wishList, id);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (isInCart) {
        navigate("/cart");
      } else {
        addToCart(product, cartDispatch, setLoader, showToast);
      }
    }
  };

  const handleWishlistClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (isInWishlist){
        addToWishlist(product, cartDispatch, showToast);
      } else {
        removeFromWishlist(product.id, cartDispatch, showToast);
      }
    }
  };

  return (
    <div className="section-main" key={id}>
      <div className="cards">
        <div className="img-container">
        <Link to={`/product/${id}`}>
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
            </span>{" "}
            <span className="txt-crossed-off">
              ₹{new Intl.NumberFormat("en-IN").format(originalPrice)}
            </span>{" "}
            <span className="txt-high-light">
              {calcPercentage(newPrice, originalPrice)}% Off
            </span>
            <div className="brand-name">
              <b>Brand: </b>
              <em className="brand-italic">{brand}</em>
            </div>
          </div>

          <div className="card-footer">
          <button
                  disabled={!inStock}
                  onClick={handleAddToCart}
                className='btn btn-text-icon-primary grid-cards-icons'
              >
                <span className="btn-card-icon">
                  <i className="fas fa-shopping-cart"></i>{" "}
                </span>
                {isInCart
          ? "Go to Cart"
          : !inStock
          ? "Out of Stock"
          : "Add to Cart"}
      </button>
      
          </div>
        </div>
        {newStock && <span className="tag">New</span>}
        {!inStock && <span className="tag" id="tag-stock">Out Of Stock</span>}
        <span>
        <i
              className="card-badge-bg wishlist-badge"
              onClick={handleWishlistClick}
            ></i>
           <i
        className={`${
          isProductInWishlist ? "wishlist-badge-active" : ""
        }fas fa heart`}
      >
        
      </i>

          {/* {isInWishlist ? (
            <i
              className="fas fa-heart card-icons"
              onClick={() =>
                cartDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: product,
                  id: product.id,
                })
              }
            ></i>
          ) : (
            <i
              className="fas fa-heart cards-icon"
              onClick={() =>
                cartDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: product,
                })
              }
            ></i>
          )} */}
        </span>
      </div>
    </div>
  );
}