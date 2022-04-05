import React from "react";
import {ProductCard, Filters, Loader} from "../../component";
import { useData } from "../../contexts";
import "./Products.css";
import {getSortedProducts,getCategoryProducts, getRatingProducts,getBrandProducts, getPricedProducts, getSearchedProducts} from "../../utilities/index"

export function Products() {
  const { products, loader, error,state:{sortBy,priceRange, searchQuery, includeJackets,includeBags, includeShoes, includeSuitcase,byRating,brandArnisa, brandGucci, brandCeline, brandBianyo} } = useData();

  const sortedProductList=getSortedProducts(products,sortBy)
  const categoryProductList=getCategoryProducts(sortedProductList,includeJackets,includeBags, includeShoes, includeSuitcase )
  const ratingProductList=getRatingProducts(categoryProductList,byRating)
  const brandProductList=getBrandProducts(ratingProductList,brandArnisa, brandGucci, brandCeline, brandBianyo)
  const pricedProductList=getPricedProducts(brandProductList,priceRange)
  const searchedProductList=getSearchedProducts(pricedProductList,searchQuery)
  // console.log(searchQuery)

  return(
  <div className="products-container">
    <Filters/>
    <main className="main-product">
    {loader && <Loader/>}
    {error && <div>{error}</div>}
    <h2>Showing All Products:{" "}
    <span className="prod-length">{searchedProductList.length}</span>

    </h2>
    <div className="section-products">
      { searchedProductList.length ? searchedProductList.map((product) => (
        <ProductCard product={product} key={product._id}/>))
        : (<div className="text__quiz">No Products Available...</div>)
      }
    </div>
    </main>
    </div>
    )
}
