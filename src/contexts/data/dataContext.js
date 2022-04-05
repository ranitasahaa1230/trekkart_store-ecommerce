import {
  createContext,
  useContext,
  useReducer,
  useState,
} from 'react';
import { cartReducer } from '../../reducers/cartReducer';
import { productReducer } from '../../reducers/productReducer';

const DataContext=createContext();

const DataProvider=({children})=>{
const [products, setProducts] = useState([]);

  const [state, dispatch] = useReducer(productReducer,{
    sortBy: "",
    // Jackets : false, Backpacks : false, Shoes : false, Suitcases : false,
    includeJackets : false, includeBags : false, includeShoes : false, includeSuitcase : false,
    brandArnisa:false, brandGucci:false, brandCeline:false, brandBianyo:false,
    priceRange: 5000,
    byRating: 1,
    searchQuery:''
  })

  const [cartState,cartDispatch]=useReducer(cartReducer,{
    products:products,
    cart:[],
    wishList:[],
  })

  return (
    <DataContext.Provider value={{products,setProducts, state, dispatch, cartState,cartDispatch}}>
        {children}
    </DataContext.Provider>
  )
}

const useData=()=>useContext(DataContext);


export {DataProvider, useData}