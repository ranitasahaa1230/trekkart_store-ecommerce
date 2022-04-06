import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useData } from "../../contexts";
import { useDocumentTitle } from "../../hooks";
import "./Wishlist.css";
import { CircularProgress } from "@mui/material";
import { ProductCard } from "../../component";

export function Wishlist() {
  const [loader, setLoader] = useState(false);
  const {
    cartState: { wishList },
  } = useData();
  const isWishlistHasItem = wishList.length > 0;

  useDocumentTitle("Wishlist");

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);


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
                  <ProductCard product={product}/>
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
