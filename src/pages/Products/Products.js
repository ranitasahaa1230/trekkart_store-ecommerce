import React, { useState, useEffect } from "react";
import axios from "axios";
import {ProductCard, Filters} from "../../component/index";
import "./Products.css";

export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProducts(products);
      } catch (error) {
        console.log("No products to show.");
      }
    })();
  }, []);

  return(
  <div className="products-container">
    <Filters/>
    <main className="main-product">
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
