export const productReducer=(state,action)=>{
    switch (action.type) {
        case "LOW_TO_HIGH":
            return {...state,sortBy:action.type};
         case "HIGH_TO_LOW":
            return {...state,sortBy:action.type};
        case "INCLUDE_JACKETS":
            return {...state, includeJackets: !state.includeJackets }
        case "INCLUDE_BAGS":
            return {...state, includeBags: !state.includeBags }
        case "INCLUDE_SHOES":
            return {...state, includeShoes: !state.includeShoes }
        case "INCLUDE_SUITCASE":
            return {...state, includeSuitcase: !state.includeSuitcase }
        case "RATING":
                return { ...state, byRating: action.payload };
        case "RESET":
             return {
                sortBy: "",
    includeJackets : false, includeBags : false, includeShoes : false, includeSuitcase : false,
    priceRange: 1000,
    byRating: "",};
        default:
            return state;
    }
}