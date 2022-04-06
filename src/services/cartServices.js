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
    await axios.post(
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
    showToast("success", `${product.name} added in cart`);
    setLoader(false);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

const removeFromCart = async (product, cartDispatch, showToast, isMoved) => {
  try {
    await axios.delete(`/api/user/cart/${product._id}`, {
      headers: { authorization: localStorage.getItem("token") },
    });

    cartDispatch({
      type: REMOVE_FROM_CART,
      payload: product._id,
    });

    !isMoved &&
      showToast("success", `${product.name} is removed from cart`);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

const updateQuantity = async (
  product,
  updateType,
  cartDispatch,
  setLoader,
  showToast
) => {
  try {
    setLoader(true);
    await axios.post(
      `/api/user/cart/${product._id}`,
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
      payload: product._id,
    });

    showToast("success", `You updated "${product.name}" quantity.`);
    setLoader(false);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

export { addToCart, removeFromCart, updateQuantity };