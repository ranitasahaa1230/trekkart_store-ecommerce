import React from 'react'
import "../../component/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./Cart.css";

export function Cart() {
  return (
    <div class="cart-grid">
    <main class="main-cart">
        <h3 class="cart-heading btm-b">My Cart - <span class="cart-desc"> 5 items</span></h3>
        <ul class="cart-products">           

            <li class="cart-main">
                <div class="card cards-horizontal">
                    <div class="img-container">
                    <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  class="grid-col-img cards-horizontal-img"
                />
              </div>
                     
                    <div class="card-content padding-s">
                      <h3 class="card-horizontal-grid">
                        Stylish Bags
                      </h3>
      
                      <div class="sm-gap md-gap">
                        <span class="txt-bold"> Rs.3899</span>
                        <span class="txt-crossed-off">Rs.2999</span>
                        <span class="txt-high-light">10% Off</span>
                      </div>
                      
                      <div class="txt-gray">
                        Quantity :
                        <button
                          class="cart-md-icons"
                        >
                          <i class="fas fa-minus cart-icons"></i>
                        </button>
                        <input
              type="text"
              class="cart-input"
              value="18"
            />
                        <button
                          class="cart-md-icons"
                        >
                          <i class="fas fa-plus cart-icons"></i>
                        </button>
                      </div>
                      
                      <div class="card-footer">
                      <button
                        class="btn btn-text-icon-primary grid-horizontal-icons"
                      >
                        Remove from Cart
                      </button>
                     <Link to="/wishlist"> <button
                      class="btn btn-text-icon-primary grid-cards-icons"
                    >
                      Move to Wishlist
                    </button></Link>
                      </div>
                    </div>
                    <span class="horizontal-tag">New</span>
                    <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>            </div>
            </li>
            <li class="cart-main">
                <div class="card cards-horizontal">
                    <div class="img-container">
                    <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  class="grid-col-img cards-horizontal-img"
                />
              </div>
                     
                    <div class="card-content padding-s">
                      <h3 class="card-horizontal-grid">
                        Stylish Bags
                      </h3>
      
                      <div class="sm-gap md-gap">
                        <span class="txt-bold"> Rs.3899</span>
                        <span class="txt-crossed-off">Rs.2999</span>
                        <span class="txt-high-light">10% Off</span>
                      </div>
                      
                      <div class="txt-gray">
                        Quantity :
                        <button
                          class="cart-md-icons"
                        >
                          <i class="fas fa-minus cart-icons"></i>
                        </button>
                        <input
              type="text"
              class="cart-input"
              value="18"
            />
                        <button
                          class="cart-md-icons"
                        >
                          <i class="fas fa-plus cart-icons"></i>
                        </button>
                      </div>
                      
                      <div class="card-footer">
                      <button
                        class="btn btn-text-icon-primary grid-horizontal-icons"
                      >
                        Remove from Cart
                      </button>
                     <Link to="/wishlist"> <button
                      class="btn btn-text-icon-primary grid-cards-icons"
                    >
                      Move to Wishlist
                    </button></Link>
                      </div>
                    </div>
                    <span class="horizontal-tag">New</span>
                    <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>            </div>
            </li>
            <li class="cart-main">
                <div class="card cards-horizontal">
                    <div class="img-container">
                    <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  class="grid-col-img cards-horizontal-img"
                />
              </div>
                     
                    <div class="card-content padding-s">
                      <h3 class="card-horizontal-grid">
                        Stylish Bags
                      </h3>
      
                      <div class="sm-gap md-gap">
                        <span class="txt-bold"> Rs.3899</span>
                        <span class="txt-crossed-off">Rs.2999</span>
                        <span class="txt-high-light">10% Off</span>
                      </div>
                      
                      <div class="txt-gray">
                        Quantity :
                        <button
                          class="cart-md-icons"
                        >
                          <i class="fas fa-minus cart-icons"></i>
                        </button>
                        <input
              type="text"
              class="cart-input"
              value="18"
            />
                        <button
                          class="cart-md-icons"
                        >
                          <i class="fas fa-plus cart-icons"></i>
                        </button>
                      </div>
                      
                      <div class="card-footer">
                      <button
                        class="btn btn-text-icon-primary grid-horizontal-icons"
                      >
                        Remove from Cart
                      </button>
                     <Link to="/wishlist"> <button
                      class="btn btn-text-icon-primary grid-cards-icons"
                    >
                      Move to Wishlist
                    </button></Link>
                      </div>
                    </div>
                    <span class="horizontal-tag">New</span>
                    <button type="button" class="btn-dismissal">
                <i class="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>            </div>
            </li>   
        </ul>
    </main>
        
    <section class="section-cart">
        <h3 class="cart-heading btm-b">Price Details</h3>

            <div class="btm-b">
              <div class="my-cart-sm">
                <span>Price <span>(2)</span></span>
  
                <span class="bold-txt">₹699</span>
              </div>
  
              <div class="my-cart-sm">
                <span>Discount</span>
  
                <span class="txt-primary">₹234</span>
              </div>
  
              <div class="my-cart-sm">
                <span>Delivery Charges</span>
  
                <span class="bold-txt">₹50</span>
              </div>
            </div>
  
            <div class="btm-b">
              <div class="my-cart-sm">
                <span class="bold-txt bolder-txt">Total Amount</span>
  
                <span class="bold-txt bolder-txt">₹2000</span>
              </div>
            </div>
  
            <div class="my-cart-sm">
              <span class="txt-primary bolder-txt"
                >You will save ₹2000 on this order</span
              >
            </div>
  
            <div>
              <a href="./checkout.html"> 
              <button class="btn btn-text-icon-primary grid-cards-icons details-icon">PLACE ORDER</button></a>
            </div>
    </section>

</div>
  )
}
