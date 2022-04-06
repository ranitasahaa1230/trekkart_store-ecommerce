import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../contexts";
import {
  calcPercentage,
  isProductInWishlist,
  isProductInCart,
} from "../../utilities/index";
import { INITIALIZE_WISHLIST } from "../../reducers";
import { useToast, useDocumentTitle } from "../../hooks";
import "./Wishlist.css";
import { CircularProgress } from "@mui/material";
import { removeFromWishlist, addToCart} from "../../services";

export function Wishlist() {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false);
  const { showToast } = useToast();
  const { user } = useAuth();
  const {
    cartState: { cart, wishList },
    cartDispatch,
  } = useData();
  const isWishlistHasItem = wishList.length > 0;

  useDocumentTitle("Wishlist");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { wishlist },
        } = await axios.get("/api/user/wishlist", {
          headers: { authorization: localStorage.getItem("token") },
        });

        cartDispatch({
          type: INITIALIZE_WISHLIST,
          payload: wishlist,
        });
        setLoader(false);
      } catch (error) {
        showToast("error", "Something went wrong!");
      }
    })();
  }, []);
  
  // const isInCart = isProductInCart(cart,id);
  // const isInWishlist = isProductInWishlist(wishList, id);

  // const handleAddToCart = () => {
  //   if (!user) {
  //     navigate("/login");
  //   } else {
      // if (isInCart) {
      //   navigate("/cart");
      // } 
      // else {
  //       addToCart(product, cartDispatch, setLoader, showToast);
  //     }
  //   }
  // };

  return (
    <div className="wishlist-section">
      {loader ? (
        <div className="text__circular">
          <CircularProgress style={{ margin: 15 }} size={120} thickness={1} />
        </div>
      ) : (
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
                  <li className="section-main" key={product._id}>
                    <div className="cards">
                      <div className="img-container">
                        <Link to={`/product/${product._id}`}>
                          <img
                            src={product.img}
                            alt={product.alt}
                            className="grid-col-img cards-img"
                          />
                        </Link>
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
                            ₹
                            {new Intl.NumberFormat("en-IN").format(
                              product.newPrice
                            )}
                          </span>{" "}
                          <span className="txt-crossed-off">
                            ₹
                            {new Intl.NumberFormat("en-IN").format(
                              product.originalPrice
                            )}
                          </span>{" "}
                          <span className="txt-high-light">
                            {calcPercentage(
                              product.newPrice,
                              product.originalPrice
                            )}
                            % Off
                          </span>
                          <div className="brand-name">
                            <b>Brand: </b>
                            <em className="brand-italic">{product.brand}</em>
                          </div>
                        </div>

                        <div className="card-footer">
                          {/* <Link to="/cart">
                        <button className="btn btn-text-icon-primary grid-cards-icons">
                          <span className="btn-card-icon">
                            <i className="fas fa-shopping-cart"></i>{" "}
                          </span>
                          Go to Cart
                        </button> */}

                          <button
                            onClick={()=> addToCart(product, cartDispatch, setLoader, showToast)}
                            className="btn btn-text-icon-primary grid-cards-icons"
                          >
                            <span className="btn-card-icon">
                              <i className="fas fa-shopping-cart"></i>{" "}
                            </span>
                            {/* {isInCart ? "Go to Cart" : "Add to Cart"} */}
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                      {product.newStock && <span className="tag">New</span>}
                      <button
                        type="button"
                        className="btn-dismissal"
                        onClick={() =>
                          removeFromWishlist(
                            product._id,
                            cartDispatch,
                            showToast
                          )
                        }
                      >
                        <i className="fa-solid fa-xmark card-btn-dismissal"></i>
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <div id="emptylist">
                  <h4 className="empty-list">Your Wishlist Is Empty ! ☹️</h4>
                  <br />
                  <div className="empty-list-products">
                    Explore more products,{" "}
                    <Link to="/products" className="continue">
                      continue shopping
                    </Link>
                    .
                  </div>
                </div>
              )}
            </ul>
          </main>
        </div>
      )}
    </div>
  );
}
