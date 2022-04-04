import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  INITIALIZE_CART,
  INITIALIZE_WISHLIST,
  CLEAR_CART_AND_WISHLIST,
} from "./index";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(({_id}) => _id !== action.payload),
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishList: [...state.wishList, { ...action.payload, qty: 1 }],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter(({_id}) => _id !== action.payload),
      };
    
    case INCREMENT_QUANTITY:
      // console.log(state,action.payload)
        return {
            ...state,
            cart: state.cart.map((item) => {
              return item._id === action.payload ? { ...item, qty: item.qty + 1 } : item;
            })
          };    
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item._id === action.payload ? { ...item, qty: item.qty - 1 } : item;
        })
      };    
      case INITIALIZE_CART:
        return { ...state, cart: action.payload.reverse() };
  
      case INITIALIZE_WISHLIST:
        return { ...state, wishList: action.payload.reverse() };
  
      case CLEAR_CART_AND_WISHLIST:
        return {
          ...state,
          wishList: [],
          cart: [],
        };
    default:
      throw new Error("Action type not found.");
  }
};
