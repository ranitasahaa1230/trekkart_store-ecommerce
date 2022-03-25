import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts";
import { calcPercentage } from "../../utilities";
import "./Cart.css";
import { CartPrice } from "./CartPrice";

export function Cart() {
  const {
    cartState: { cart, priced, quantity},
    cartDispatch,
  } = useData();
  const isCartHasItem = cart.length > 0;

  return (
    <div>
      <h3 className="cart-heading">
        My Cart{" "}
        <span className="cart-desc">{isCartHasItem && `(${cart.length})`}</span>
      </h3>
      <div className="cart-grid">
      <main className="main-cart">
              <ul className="cart-products">
        {isCartHasItem ? (
          cart.map((product) => (
                <li className="cart-main">
                  <div className="cardss cards-horizontals">
                    <div className="img-container">
                      <img
                        src={product.img}
                        alt={product.alt}
                        className="grid-col-img cards-horizontal-img"
                      />
                    </div>

                    <div className="card-content padding-s">
                      <h3 className="card-horizontal-grid">{product.name}</h3>

                      <div className="sm-gap md-gap">
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
                      </div>

                      <div className="txt-gray">
                        Quantity :
                        <button className="cart-md-icons"
                      disabled={quantity > 1 ? false : true}
                      onClick={(e) =>
                      cartDispatch({
                        type: "DECREMENT_QTY",
                        payload:quantity,id:product.id})}>
                          <i className="fas fa-minus cart-icons"></i>
                        </button>
                        <input type="text" className="cart-input" value={quantity}/>
                        <button className="cart-md-icons" 
                      onClick={(e) =>
                      cartDispatch({
                        type: "INCREMENT_QTY",
                        payload:product,
                        id:product.id
                    })}>  
                        <i className="fas fa-plus cart-icons"></i>
                        </button>
                      </div>

                      <div className="card-footer">
                        <button
                          className="btn btn-text-icon-primary grid-horizontal-icons"
                          onClick={() =>
                            cartDispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product,
                              id:product.id
                            })
                          }
                        >
                          Remove from Cart
                        </button>
                        <Link to="/wishlist">
                          {" "}
                          <button
                            className="btn btn-text-icon-primary grid-cards-icons gridd-icons"
                            onClick={() =>
                              cartDispatch({
                                type: "ADD_TO_WISHLIST",
                                payload: product,
                              })
                            }
                          >
                            Move to Wishlist
                          </button>
                        </Link>
                      </div>
                    </div>
                    <span className="horizontal-tag">New</span>
                    <button type="button" className="btn-dismissal">
                      <i className="fa-solid fa-xmark card-btn-dismissal"></i>
                    </button>
                  </div>
                </li>
          ))
        ) : (
          <h3 className="centre-list">Your Cart Is Empty ! ☹️ <span>Or want to continue <Link to="/products">shopping?</Link></span></h3>
        )}
        </ul>
        </main>

        {isCartHasItem && <CartPrice/>}
      </div>
    </div>
  );
}
