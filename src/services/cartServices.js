import axios from "axios";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from "../reducers";

const addToCart = async (product, cartDispatch, setLoader, showToast) => {
    try {
      setLoader(true);
      const updatedCart = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
  
      cartDispatch({
        type: ADD_TO_CART,
        payload: product,
      });
      showToast("success", "Added to cart");
      setLoader(false);
    } catch (error) {
      showToast("error", "Something went wrong!");
    }
  };
  
  const removeFromCart = async (productId, cartDispatch, showToast, isMoved) => {
    try {
      const updatedCart = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: localStorage.getItem("token") },
      });
  
      cartDispatch({
        type: REMOVE_FROM_CART,
        payload: productId,
      });
  
      !isMoved && showToast("success", "Removed from cart");
    } catch (error) {
      showToast("error", "Something went wrong");
    }
  };
  
  const updateQuantity = async (
    productId,
    updateType,
    cartDispatch,
    setLoader,
    showToast
  ) => {
    try {
      setLoader(true);
      const updatedCart = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: updateType,
          },
        },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
  
      cartDispatch({
        type: updateType === "increment" ? INCREMENT_QUANTITY : DECREMENT_QUANTITY,
        payload: productId,
      });
  
      showToast("success", "Cart has been updated");
      setLoader(false);
    } catch (error) {
      showToast("error", "Something went wrong");
    }
  };
  
  export { addToCart, removeFromCart, updateQuantity };