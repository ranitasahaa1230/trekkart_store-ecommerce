export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishList: [...state.wishList, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishList: state.wishList.filter((c) => c.id !== action.payload.id),
      };
    // case "CHANGE_CART_QTY":
    //   return {
    //     ...state,
    //     cart: state.cart.filter(
    //       (c) =>
    //         c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty //c.qty which is already there
    //     ),
    //   };
    case "INCREMENT_QTY":
        return {
            ...state,
            cart: state.cart.map((item) => {
              return item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item;
            })
          };    
    case "DECREMENT_QTY":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
