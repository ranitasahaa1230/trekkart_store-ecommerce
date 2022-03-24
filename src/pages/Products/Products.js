import React from "react";
import {ProductCard, Filters, Loader} from "../../component";
import { useData } from "../../contexts";
import "./Products.css";
import {getSortedProducts,getCategoryProducts, getRatingProducts,getBrandProducts} from "../../utilities/index"

export function Products() {
  const { products, loader, error,state:{sortBy, includeJackets,includeBags, includeShoes, includeSuitcase,byRating,brandArnisa, brandGucci, brandCeline, brandBianyo} } = useData();

  const sortedProductList=getSortedProducts(products,sortBy)
  const categoryProductList=getCategoryProducts(sortedProductList,includeJackets,includeBags, includeShoes, includeSuitcase )
  const ratingProductList=getRatingProducts(categoryProductList,byRating)
  const brandProductList=getBrandProducts(ratingProductList,brandArnisa, brandGucci, brandCeline, brandBianyo)
  console.log(brandArnisa, brandGucci, brandCeline, brandBianyo)

  return(
  <div className="products-container">
    <Filters/>
    <main className="main-product">
    {loader && <Loader/>}
    {error && <div>{error}</div>}
    <h2>Showing All Products</h2>
    <div className="section-products">
      {brandProductList.map((product) => (
        <ProductCard product={product} key={product._id}/>
      ))}
    </div>
    </main>
    </div>
    )
}
