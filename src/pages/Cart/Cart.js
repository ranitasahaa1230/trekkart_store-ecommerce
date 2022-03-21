import React from 'react'
// import "../../component/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import "./Cart.css";

export function Cart() {
  return (
    <div>
    <h3 className="cart-heading">My Cart <span className="cart-desc">(5)</span></h3>
    <h4 className="empty-list">Your Cart Is Empty ! ☹️</h4>
    <div className="cart-grid">
    <main className="main-cart">
        <ul className="cart-products">           

            <li className="cart-main">
                <div className="cardss cards-horizontals">
                    <div className="img-container">
                    <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  className="grid-col-img cards-horizontal-img"
                />
              </div>
                     
                    <div className="card-content padding-s">
                      <h3 className="card-horizontal-grid">
                        Stylish Bags
                      </h3>
      
                      <div className="sm-gap md-gap">
                        <span className="txt-bold"> Rs.3899</span>
                        <span className="txt-crossed-off">Rs.2999</span>
                        <span className="txt-high-light">10% Off</span>
                      </div>
                      
                      <div className="txt-gray">
                        Quantity :
                            <button
                          className="cart-md-icons"
                        >
                          <i className="fas fa-minus cart-icons"></i>
                        </button>
                        <input
              type="text"
              className="cart-input"
              value="18"
            />
                        <button
                          className="cart-md-icons"
                        >
                          <i className="fas fa-plus cart-icons"></i>
                        </button>
                      </div>
                      
                      <div className="card-footer">
                      <button
                        className="btn btn-text-icon-primary grid-horizontal-icons"
                      >
                        Remove from Cart
                      </button>
                     <Link to="/wishlist"> <button
                      className="btn btn-text-icon-primary grid-cards-icons"
                    >
                      Move to Wishlist
                    </button></Link>
                      </div>
                    </div>
                    <span className="horizontal-tag">New</span>
                    <button type="button" className="btn-dismissal">
                <i className="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>            
              </div>
            </li>

            <li className="cart-main">
                <div className="cardss cards-horizontals">
                    <div className="img-container">
                    <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  className="grid-col-img cards-horizontal-img"
                />
              </div>
                     
                    <div className="card-content padding-s">
                      <h3 className="card-horizontal-grid">
                        Stylish Bags
                      </h3>
      
                      <div className="sm-gap md-gap">
                        <span className="txt-bold"> Rs.3899</span>
                        <span className="txt-crossed-off">Rs.2999</span>
                        <span className="txt-high-light">10% Off</span>
                      </div>
                      
                      <div className="txt-gray">
                        Quantity :
                            <button
                          className="cart-md-icons"
                        >
                          <i className="fas fa-minus cart-icons"></i>
                        </button>
                        <input
              type="text"
              className="cart-input"
              value="18"
            />
                        <button
                          className="cart-md-icons"
                        >
                          <i className="fas fa-plus cart-icons"></i>
                        </button>
                      </div>
                      
                      <div className="card-footer">
                      <button
                        className="btn btn-text-icon-primary grid-horizontal-icons"
                      >
                        Remove from Cart
                      </button>
                     <Link to="/wishlist"> <button
                      className="btn btn-text-icon-primary grid-cards-icons"
                    >
                      Move to Wishlist
                    </button></Link>
                      </div>
                    </div>
                    <span className="horizontal-tag">New</span>
                    <button type="button" className="btn-dismissal">
                <i className="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>            
              </div>
            </li>
            <li className="cart-main">
                <div className="cardss cards-horizontals">
                    <div className="img-container">
                    <img
                  src="https://github.com/ranitasahaa1230/Trekkart-Store/blob/d51db72677ff63c4de681f8b249d14fcab32f3ac/components/images/luggage2.jpg?raw=true"
                  alt="hiking"
                  className="grid-col-img cards-horizontal-img"
                />
              </div>
                     
                    <div className="card-content padding-s">
                      <h3 className="card-horizontal-grid">
                        Stylish Bags
                      </h3>
      
                      <div className="sm-gap md-gap">
                        <span className="txt-bold"> Rs.3899</span>
                        <span className="txt-crossed-off">Rs.2999</span>
                        <span className="txt-high-light">10% Off</span>
                      </div>
                      
                      <div className="txt-gray">
                        Quantity :
                            <button
                          className="cart-md-icons"
                        >
                          <i className="fas fa-minus cart-icons"></i>
                        </button>
                        <input
              type="text"
              className="cart-input"
              value="18"
            />
                        <button
                          className="cart-md-icons"
                        >
                          <i className="fas fa-plus cart-icons"></i>
                        </button>
                      </div>
                      
                      <div className="card-footer">
                      <button
                        className="btn btn-text-icon-primary grid-horizontal-icons"
                      >
                        Remove from Cart
                      </button>
                     <Link to="/wishlist"> <button
                      className="btn btn-text-icon-primary grid-cards-icons"
                    >
                      Move to Wishlist
                    </button></Link>
                      </div>
                    </div>
                    <span className="horizontal-tag">New</span>
                    <button type="button" className="btn-dismissal">
                <i className="fa-solid fa-xmark card-btn-dismissal"></i>
              </button>            
              </div>
            </li>  
        </ul>
    </main>
        
    <section className="section-cart">
        <h3 className="heading-carts btm-b">Price Details</h3>

            <div className="btm-b">
              <div className="my-cart-sm">
                <span>Price <span>(2 items)</span></span>
  
                <span className="bold-txt">₹699</span>
              </div>
  
              <div className="my-cart-sm">
                <span>Discount</span>
  
                <span className="txt-primary">- ₹234</span>
              </div>
  
              <div className="my-cart-sm">
                <span>Delivery Charges</span>
  
                <span className="bold-txt">₹50</span>
              </div>
            </div>
  
            <div className="btm-b">
              <div className="my-cart-sm">
                <span className="bold-txt bolder-txt">Total Amount</span>
  
                <span className="bold-txt bolder-txt">₹2000</span>
              </div>
            </div>
  
            <div className="my-cart-sm">
              <span className="txt-primary bolder-txt"
                >You will save ₹2000 on this order</span
              >
            </div>
  
            <div>
              <a href="./checkout.html"> 
              <button className="btn btn-text-icon-primary grid-cards-icons details-icon">PLACE ORDER</button></a>
            </div>
    </section>

</div>
</div>
  )
}
