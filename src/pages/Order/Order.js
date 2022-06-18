import { useNavigate } from "react-router-dom";
import "./Order.css";

export const Order = () => {
  const navigate = useNavigate();

  const handleConitnueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="cart-section">
      <div className="order-container">
          <h3 className="cart-head">Yayyy, Order Placed Successfully</h3>
            {/* <img className="img" src={check} /> */}
      <button
        className="submit-btn"
        onClick={handleConitnueShopping}
      >
        Continue Shopping
      </button>
      </div>
      </div>
  );
};
