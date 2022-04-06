import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast, useDocumentTitle } from "../../hooks";
import { useAuth, useData } from "../../contexts";
import {
  calcPercentage,
  isProductInWishlist,
  isProductInCart,
} from "../../utilities/index";
import { addToCart, addToWishlist, removeFromWishlist } from "../../services";
import "./ProductPage.css";
import { CircularProgress } from "@mui/material";

export const ProductPage = () => {
  const [loader, setLoader] = useState(false);
  const [productLoader, setProductLoader] = useState(false);
  const [product, setProduct] = useState(null);
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const { productId } = useParams();
  const {
    cartState: { cart, wishList },
    cartDispatch,
  } = useData();

  const {
    _id,
    alt,
    img,
    name,
    inStock,
    description,
    newPrice,
    originalPrice,
    brand,
    ratings,
    newStock,
  } = product ?? {};

  useDocumentTitle("Product Details");
  const isInCart = isProductInCart(cart, _id);
  const isInWishlist = isProductInWishlist(wishList, _id);

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { product },
        } = await axios.get(`/api/products/${productId}`);

        setProduct(product);
        setLoader(false);
      } catch (error) {
        showToast("error", "Could not fetch the product.");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (isInCart) {
        navigate("/cart");
      } else {
        addToCart(product, cartDispatch, setProductLoader, showToast);
      }
    }
  };

  const handleWishlistClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      if (!isInWishlist) {
        addToWishlist(product, cartDispatch, showToast);
      } else {
        removeFromWishlist(product._id, cartDispatch, showToast);
      }
    }
  };

  return (
    <div className="products-main" key={_id}>
      {loader ? (
        <div className="text__circular">
          <CircularProgress style={{ margin: 15 }} size={120} thickness={1} />
        </div>
      ) : (
        <div className="display-flex">
          <div className="img-contains">
            <img src={img} alt={alt} className="img-contain" />
          </div>

          <div className="card-content padding-s cards-content">
            <div className="cards-grid btms-b">
              <h3 className="card-grid">{name}</h3>
              <h2>{description}</h2>
              <span className="cards-rating">
                {ratings}
                <i className="fa-solid fa-star star-rating"></i>
              </span>
            </div>

            <div className="cards-price btms-b">
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
                <div className="price">Price inclusive of all taxes</div>
              </div>

              <div className="card-footer">
                <button
                  disabled={!inStock}
                  onClick={handleAddToCart}
                  className="btn btn-text-icon-primary grid-cards-icons"
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

                <button
                  disabled={productLoader}
                  className="btn btn-text-icon-primary grid-cards-icons cards-heart"
                  onClick={handleWishlistClick}
                >
                  <span className="btn-card-icon card-heart">
                    <i className="fas fa-heart"></i>{" "}
                  </span>
                  {isInWishlist ? "Added in WishList" : "WishList"}
                </button>
              </div>
            </div>

            <div className="original-products">
              <div>100% Original Product</div>
              <div>Cash on delivery is available</div>
            </div>
          </div>
          {newStock && (
            <span className="tag" id="tag-price">
              New
            </span>
          )}
          {!inStock && (
            <span className="tag tag-stock" id="tag-price">
              Out Of Stock
            </span>
          )}
        </div>
      )}
    </div>
  );
};
