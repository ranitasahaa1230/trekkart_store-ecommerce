export const productReducer=(state,action)=>{
    switch (action.type) {
        case "LOW_TO_HIGH":
            return {...state,sortBy:action.type};
         case "HIGH_TO_LOW":
            return {...state,sortBy:action.type};
    
        default:
            return state;
    }
}