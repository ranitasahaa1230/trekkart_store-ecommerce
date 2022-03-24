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
        default:
            return state;
    }
}