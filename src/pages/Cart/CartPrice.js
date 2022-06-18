import React from 'react'
import { Link } from "react-router-dom";
import { useData } from '../../contexts';
import { getPriceDetails } from '../../utilities';

export function CartPrice() {
    const {
        cartState: { cart}} = useData();
      const { newPrice, discount } = getPriceDetails(cart);
      
  return (
    <div className='section-price'>
        <section className="section-cart">
          <h3 className="heading-carts btm-b">Price Details</h3>

          <div className="btm-b">
            <div className="my-cart-sm">
              <span>
                Price <span>({cart.length} items)</span>
              </span>

              <span className="bold-txt">₹{newPrice}</span>
            </div>

            <div className="my-cart-sm">
              <span>Discount</span>

              <span className="txt-primary">- ₹{discount}</span>
            </div>

            <div className="my-cart-sm">
              <span>Delivery Charges</span>

              <span className="bold-txt">₹0</span>
            </div>
          </div>

          <div className="btm-b">
            <div className="my-cart-sm">
              <span className="bold-txt bolder-txt">Total Amount</span>

              <span className="bold-txt bolder-txt">₹Rs.{newPrice - discount}</span>
            </div>
          </div>

          <div className="my-cart-sm">
            <span className="txt-primary bolder-txt">
              You will save ₹{discount} on this order
            </span>
          </div>

          <div>
            <Link to="/address">
              <button className="btn btn-text-icon-primary grid-cards-icons details-icon">
                PLACE ORDER
              </button>
            </Link>
          </div>
        </section>
    </div>
  )
}
