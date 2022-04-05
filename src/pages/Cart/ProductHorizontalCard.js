import React, { useState } from "react";
import { Link} from "react-router-dom";
import { calcPercentage } from "../../utilities";
import {
  addToWishlist,
  removeFromCart,
  updateQuantity,
} from "../../services";
import { useData } from "../../contexts";
import {
  useToast,
} from "../../hooks";

export const ProductHorizontalCard = ({ product }) => {
  const [isloading, setIsLoading] = useState(false);
  const { cartDispatch } = useData();

  const { showToast } = useToast();
  const {
    _id,
    alt,
    img,
    name,
    qty,
    // description,
    newPrice,
    originalPrice,
    // brand,
    // ratings,
  } = product;

  const handleMoveToWishlist = () => {
    addToWishlist(product, cartDispatch, showToast);
    removeFromCart(product._id, cartDispatch, showToast, true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(_id, cartDispatch, showToast);
  };

  const handleUpdateQuantity = (updateType) => {
    updateQuantity(_id, updateType, cartDispatch, setIsLoading, showToast);
  };

  return (
    <div>
      <li className="cart-main" key={_id}>
        <div className="cardss cards-horizontals">
          <div className="img-container">
          <Link to={`/product/${_id}`}>
            <img
              src={img}
              alt={alt}
              className="grid-col-img cards-horizontal-img"
            />
            </Link>
          </div>

          <div className="card-content padding-s">
            <h3 className="card-horizontal-grid">{name}</h3>

            <div className="sm-gap md-gap">
              <span className="txt-bold">
                ₹{new Intl.NumberFormat("en-IN").format(newPrice)}
              </span>{" "}
              <span className="txt-crossed-off">
                ₹{new Intl.NumberFormat("en-IN").format(originalPrice)}
              </span>{" "}
              <span className="txt-high-light">
                {calcPercentage(newPrice, originalPrice)}% Off
              </span>
            </div>

            <div className="txt-gray">
              Quantity :
              <button
                className="cart-md-icons"
                disabled={isloading || qty === 1}
                // disabled={qty > 1 ? false : true}
                onClick={() => handleUpdateQuantity("decrement")}
              >
                <i className="fas fa-minus cart-icons"></i>
              </button>
              <input type="text" className="cart-input" value={qty} />
              <button
                className="cart-md-icons"
                disabled={isloading}
                onClick={() => handleUpdateQuantity("increment")}
              >
                <i className="fas fa-plus cart-icons"></i>
              </button>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-text-icon-primary grid-horizontal-icons"
                onClick={handleRemoveFromCart}
              >
                Remove from Cart
              </button>
              <Link to="/wishlist">
                {" "}
                <button
                  className="btn btn-text-icon-primary grid-cards-icons gridd-icons"
                  onClick={handleMoveToWishlist}
                >
                  Move to Wishlist
                </button>
              </Link>
            </div>
          </div>
          <span className="horizontal-tag">New</span>
          <button
            type="button"
            className="btn-dismissal"
            onClick={handleRemoveFromCart}
          >
            <i className="fa-solid fa-xmark card-btn-dismissal"></i>
          </button>
        </div>
      </li>
    </div>
  );
};
