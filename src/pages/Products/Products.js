import React, { useState, useEffect } from "react";
import axios from "axios";
// import {ProductCard, Filters} from "../../component";

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
    <main class="main-product">
    {/* <Filters/> */}
    <h2>Showing All Products</h2>
    <div class="section-products">
      {products.map((product) => (
        {/* <ProductCard product={product}/> */}
      ))}
    </div>
    </main>
    )
}
