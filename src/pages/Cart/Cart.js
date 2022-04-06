import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../contexts";
import "./Cart.css";
import { CartPrice } from "./CartPrice";
import { INITIALIZE_CART } from "../../reducers";
import { useToast, useDocumentTitle } from "../../hooks";
import { ProductHorizontalCard } from "./ProductHorizontalCard";
import { CircularProgress } from "@mui/material";

export function Cart() {
  const [loader, setLoader] = useState(false);
  // const navigate = useNavigate();
  const {
    cartState: { cart },
    cartDispatch,
  } = useData();
  const { showToast } = useToast();
  const isCartHasItem = cart.length > 0;

  useDocumentTitle("Cart");

  useEffect(() => {
    (async () => {
      try {
        setLoader(true);
        const {
          data: { cart },
        } = await axios.get("/api/user/cart", {
          headers: { authorization: localStorage.getItem("token") },
        });

        cartDispatch({
          type: INITIALIZE_CART,
          payload: cart,
        });
        setLoader(false);
      } catch (error) {
        showToast("error", "Something went wrong!");
      }
    })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cart-section">
      {loader ? (
        <div className="text__circular">
          <CircularProgress style={{ margin: 15 }} size={120} thickness={1} />
        </div>
      ) : (
        <div className="cart-main">
          <h3 className="cart-heading">
            My Cart{" "}
            <span className="cart-desc">
              {isCartHasItem && `(${cart.length})`}
            </span>
          </h3>
          <div className="cart-grid">
            <main className="main-cart">
              <ul className="cart-products">
                {isCartHasItem ? (
                  cart.map((product) => (
                    <ProductHorizontalCard
                      key={product._id}
                      product={product}
                    />
                  ))
                ) : (
                  <h3 className="centre-list">
                    Your Cart Is Empty ! ☹️{" "}
                    <span>
                      Or want to continue <Link to="/products">shopping?</Link>
                    </span>
                  </h3>
                )}
              </ul>
            </main>

            {isCartHasItem && <CartPrice />}
          </div>
        </div>
      )}
    </div>
  );
}
