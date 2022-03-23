import React from "react";
import {ProductCard, Filters, Loader} from "../../component";
import { useData } from "../../contexts";
import "./Products.css";
import {getSortedProducts} from "../../utilities/index"

export function Products() {
  const { products, loader, error,state:{sortBy} } = useData();
  // console.log(sortBy)

  const sortedProductList=getSortedProducts(products,sortBy)
  // console.log(sortBy)

  return(
  <div className="products-container">
    <Filters/>
    <main className="main-product">
    {loader && <Loader/>}
    {error && <div>{error}</div>}
    <h2>Showing All Products</h2>
    <div className="section-products">
      {sortedProductList.map((product) => (
        <ProductCard product={product} key={product._id}/>
      ))}
    </div>
    </main>
    </div>
    )
}
