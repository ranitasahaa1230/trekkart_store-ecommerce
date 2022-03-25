export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }; //if qty is not 1, then we dont have to destruc action.payload
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c) => c.id !== action.payload.id),
        };
        case "ADD_TO_WISHLIST":
            return { ...state, wishList: [...state.wishList, { ...action.payload, qty: 1 }] };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty //c.qty which is laready there
          ),
        };
      default:
        return state;
    }
  };