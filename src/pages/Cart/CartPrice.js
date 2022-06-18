import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../contexts";
import { useToast } from "../../hooks";
import { getPriceDetails } from "../../utilities";

export function CartPrice() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    cartState: { cart },
  } = useData();
  const { newPrice, discount } = getPriceDetails(cart);
  const { showToast } = useToast();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      showToast("error", "Razorpay SDK failed to load");
    }

    const options = {
      key: "rzp_test_VSdp7X3K39GwBK",
      amount: (newPrice-discount) * 100,
      curreny: "INR",
      name: "Trekkart Store",
      description: "Thank you for shopping with us.",
      image:
        "https://therightfit.netlify.app/assets/The%20Right%20Fit-logos.jpeg",

      handler: ({ payment_id }) => {
        // cartDispatch({ type: "CLEAR_CART" });
        navigate("/order");
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="section-price">
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

            <span className="bold-txt bolder-txt">
              ₹Rs.{newPrice - discount}
            </span>
          </div>
        </div>

        <div className="my-cart-sm">
          <span className="txt-primary bolder-txt">
            You will save ₹{discount} on this order
          </span>
        </div>

        <div>
          {pathname === "/cart" && (
            <Link to="/address">
              <button className="btn btn-text-icon-primary grid-cards-icons details-icon">
                PLACE ORDER
              </button>
            </Link>
          )}

          {pathname === "/checkout" && (
            <button
              className="btn btn-text-icon-primary grid-cards-icons details-icon"
              onClick={displayRazorpay}
            >
              CHECKOUT
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
