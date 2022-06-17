import { actionTypes } from "./index";
const {
  INCLUDE_BAGS,
  INCLUDE_JACKETS,
  INCLUDE_SHOES,
  INCLUDE_SUITCASE,
  RESET,
} = actionTypes;

export const productReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
      // case "CATEGORY_NAME":
      //   return {
      //     ...state,
      //     catagoryName: {
      //       ...state.catagoryName,
      //       [action.payload]: !state.catagoryName[action.payload],
      //     },
      //   };
    case INCLUDE_JACKETS:
      return { ...state, includeJackets: !state.includeJackets, 
        // includeBags:false,includeShoes:false, includeSuitcase:false
      };
    case INCLUDE_BAGS:
      return { ...state, includeBags: !state.includeBags, 
        // includeJackets:false,includeShoes:false, includeSuitcase:false
      };
    case INCLUDE_SHOES:
      return { ...state, includeShoes: !state.includeShoes,
        // includeBags:false,includeJackets:false, includeSuitcase:false
      };
    case INCLUDE_SUITCASE:
      return { ...state, includeSuitcase: !state.includeSuitcase,
        // includeBags:false,includeShoes:false, includeJackets:false
      };
    // case "FILTER_BY_CATEGORY":
    //   return {
    //     ...state,
    //     [action.payload]: !state[action.payload],
    //   };
    case "RATING":
      return { ...state, byRating: action.payload };
    case "BRAND_ARNISA":
      return { ...state, brandArnisa: !state.brandArnisa };
    case "BRAND_BIANYO":
      return { ...state, brandBianyo: !state.brandBianyo };
    case "BRAND_CELINE":
      return { ...state, brandCeline: !state.brandCeline };
    case "BRAND_GUCCI":
      return { ...state, brandGucci: !state.brandGucci };
    case "PRICE":
      return { ...state, priceRange: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case RESET:
      return {
        ...state,
        sortBy: "",
        includeJackets: false,
        includeBags: false,
        includeShoes: false,
        includeSuitcase: false,
        brandArnisa: false,
        brandGucci: false,
        brandCeline: false,
        brandBianyo: false,
        priceRange: 5000,
        byRating: 1,
      };
    default:
      throw new Error("Action type not found.");
  }
};
