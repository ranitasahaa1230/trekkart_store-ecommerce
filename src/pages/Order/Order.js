import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import "./Order.css";

export const Order = () => {
  const navigate = useNavigate();
  const handleConitnueShopping = () => {
    navigate("/products");
  };

  return (
    <>
        <div className="cart-section">
          <div className="order-container">
            <h3 className="cart-head">Yayyy, Order Placed Successfully !🎉</h3>
            <button
              className="submit-loginbtn"
              onClick={handleConitnueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      <Confetti />
    </>
  );
};
