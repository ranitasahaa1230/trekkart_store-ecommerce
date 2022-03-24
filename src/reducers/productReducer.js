export const productReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "INCLUDE_JACKETS":
      return { ...state, includeJackets: !state.includeJackets };
    case "INCLUDE_BAGS":
      return { ...state, includeBags: !state.includeBags };
    case "INCLUDE_SHOES":
      return { ...state, includeShoes: !state.includeShoes };
    case "INCLUDE_SUITCASE":
      return { ...state, includeSuitcase: !state.includeSuitcase };
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
    case "RESET":
      return {
        sortBy: "",
        includeJackets: false,
        includeBags: false,
        includeShoes: false,
        includeSuitcase: false,
        brandArnisa: false,
        brandGucci: false,
        brandCeline: false,
        brandBianyo: false,
        priceRange: 1500,
        byRating: 1,
      };
    default:
      return state;
  }
};
