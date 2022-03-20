import React, { useState, useEffect } from "react";
import axios from "axios";

export function Products() {
    const [products,setProducts]=useState([])
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await axios.get("/api/products");
        setProducts(products)
      } catch (error) {
        console.log("No products to show.");
      }
    })();
  }, []);
  return <div>
      <h2>Showing All Products</h2>
      <div>
          {products.map((prod)=>(
              <div key={prod._id}>
              <img src={prod.img} alt={prod.alt}/>
              <p>{prod.rating}</p>
          <p className="card-description">{prod.description}</p>
        <div className="price">
          <p className="disc-price">₹{prod.newPrice}</p>
          <p className="actual-price">₹{prod.originalPrice}</p>
          
        </div>
              </div>
          ))}
      </div>
  </div>;
}
