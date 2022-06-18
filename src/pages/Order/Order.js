import { useNavigate } from "react-router-dom";
import "./Order.css";

export const Order = () => {
  const navigate = useNavigate();

  const handleConitnueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="order-container">
      <h3 className="heading-2">Order Placed Successfully</h3>
      <button
        className="button"
        onClick={handleConitnueShopping}
      >
        Continue Shopping
      </button>
    </div>
  );
};
