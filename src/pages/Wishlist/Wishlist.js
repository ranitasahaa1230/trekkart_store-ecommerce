import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts";
import { calcPercentage } from "../../utilities";
import "./Wishlist.css";

export function Wishlist() {
  const {
    cartState: { wishList },
  } = useData();
  const isWishlistHasItem = wishList.length > 0;
  return (
    <div>
      <main className="wishlist-main">
        <h3 className="wishlist-heading">
          My Wishlist{" "}
          <span className="wishlist-desc">
            {isWishlistHasItem && `(${wishList.length})`}
          </span>
        </h3>

        <ul className="wishlist-products">
        {isWishlistHasItem ? (
          wishList.map((product) => (
              <li className="section-main">
                <div className="cards">
                  <div className="img-container">
                    <img
                      src={product.img}
                      alt={product.alt}
                      className="grid-col-img cards-img"
                    />
                  </div>

                  <div className="card-content padding-s">
                    <h3 className="card-grid">
                      {product.name}
                      <span className="cards-rating">
                        {product.ratings}
                        <i className="fa-solid fa-star star-rating"></i>
                      </span>
                    </h3>

                    <div className="sm-gap">
                    <span className="txt-bold">
              ₹{new Intl.NumberFormat("en-IN").format(product.newPrice)}
            </span>{" "}
            <span className="txt-crossed-off">
              ₹{new Intl.NumberFormat("en-IN").format(product.originalPrice)}
            </span>{" "}
            <span className="txt-high-light">{calcPercentage(product.newPrice, product.originalPrice)}% Off</span>
            <div className="brand-name">
              <b>Brand: </b>
              <em className="brand-italic">{product.brand}</em>
            </div>
                    </div>

                    <div className="card-footer">
                      <Link to="/cart">
                        <button className="btn btn-text-icon-primary grid-cards-icons">
                          <span className="btn-card-icon">
                            <i className="fas fa-shopping-cart"></i>{" "}
                          </span>
                          Go to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                  <span class="tag">New</span>
                  <button type="button" class="btn-dismissal">
                    <i class="fa-solid fa-xmark card-btn-dismissal"></i>
                  </button>
                </div>
              </li>
          ))
        ) : (
          <h4 className="empty-list">Your Wishlist Is Empty ! ☹️</h4>
        )}
        </ul>
      </main>
    </div>
  );
}
