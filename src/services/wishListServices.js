import axios from "axios";
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../reducers";

const addToWishlist = async (product, cartDispatch, showToast) => {
  try {
    await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    cartDispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });

    showToast("success", `${product.name} added in WishList.`);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

const removeFromWishlist = async (product, cartDispatch, showToast) => {
  try {
    await axios.delete(
      `/api/user/wishlist/${product._id}`,
      {
        headers: { authorization: localStorage.getItem("token") },
      }
    );

    cartDispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: product._id,
    });

    showToast("success", `${product.name} is removed from WishList.`);
  } catch (error) {
    showToast("error", "Something went wrong, please try again.");
  }
};

export { addToWishlist, removeFromWishlist };