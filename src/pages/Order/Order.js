import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import order from "../../assets/images/order.png";
import "./Order.css";

export const Order = () => {
  const navigate = useNavigate();
  const handleConitnueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="cart-section">
      <div className="order-container">
        <img src={order} alt="order-placed" />
        <div className="cart-head">
          <h2 className="cart-heads">Yayyy, Order Placed Successfully !🎉</h2>
          <button className="submit-loginbtn" onClick={handleConitnueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
      <Confetti />
    </div>
  );
};
