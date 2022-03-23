import React, { useState, useEffect } from "react";
import {ProductCard, Filters, Loader} from "../../component";
import { useData } from "../../contexts";
import "./Products.css";

export function Products() {
  const { products, loader, error } = useData();

  return(
  <div className="products-container">
    <Filters/>
    <main className="main-product">
    {loader && <Loader/>}
    {error && <div>{error}</div>}
    <h2>Showing All Products</h2>
    <div className="section-products">
      {products.map((product) => (
        <ProductCard product={product} key={product._id}/>
      ))}
    </div>
    </main>
    </div>
    )
}
