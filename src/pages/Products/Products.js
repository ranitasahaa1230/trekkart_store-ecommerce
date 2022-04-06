import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProductCard, Filters } from "../../component";
import { useData } from "../../contexts";
import "./Products.css";
import { CircularProgress } from "@mui/material";
import {
  getSortedProducts,
  getCategoryProducts,
  getRatingProducts,
  getBrandProducts,
  getPricedProducts,
  getSearchedProducts,
} from "../../utilities/index";

export function Products() {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const {
    products,setProducts,
    state: {
      sortBy,
      priceRange,
      searchQuery,
      includeJackets,
      includeBags,
      includeShoes,
      includeSuitcase,
      byRating,
      brandArnisa,
      brandGucci,
      brandCeline,
      brandBianyo,
    },
  } = useData();

  const sortedProductList = getSortedProducts(products, sortBy);
  const categoryProductList = getCategoryProducts(
    sortedProductList,
    includeJackets,
    includeBags,
    includeShoes,
    includeSuitcase
  );
  const ratingProductList = getRatingProducts(categoryProductList, byRating);
  const brandProductList = getBrandProducts(
    ratingProductList,
    brandArnisa,
    brandGucci,
    brandCeline,
    brandBianyo
  );
  const pricedProductList = getPricedProducts(brandProductList, priceRange);
  const searchedProductList = getSearchedProducts(
    pricedProductList,
    searchQuery
  );
  // console.log(searchQuery)

  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoader(true);
        const res = await axios.get("/api/products");
        if (res.status === 200) {
          setProducts(res.data.products);
          setLoader(false);
        }
      } catch (err) {
        setError(err.message);
        // showToast("error", "Something went wrong!");
        setLoader(false);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="products-container">
      <Filters />
      <main className="main-product">
        {error && <div>{error}</div>}
        {loader ? (
          <div className="text__circular">
          <CircularProgress style={{ margin: 15 }} size={120} thickness={1} />
          </div>
        ) : (
          <>
            <h2>
              Showing All Products:{" "}
              <span className="prod-length">{searchedProductList.length}</span>
            </h2>
            <div className="section-products">
              {searchedProductList.length ? (
                searchedProductList.map((product) => (
                  <ProductCard product={product} key={product._id} />
                ))
              ) : (
                <div className="text__quiz">No Products Available...</div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
