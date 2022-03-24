import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { productReducer } from '../../reducers/productReducer';

const DataContext=createContext();

const DataProvider=({children})=>{
const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const [state, dispatch] = useReducer(productReducer,{
    sortBy: "",
    includeJackets : false, includeBags : false, includeShoes : false, includeSuitcase : false,
    priceRange: 1000,
    byRating: "",
  })
  
  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoader(true);
        const res = await axios.get("/api/products");
        if (res.status === 200) {
          setProducts(res.data.products);
          setLoader(false);
        }
      } catch (err) {
        setError(err.message);
        setLoader(false);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{products, loader, error, state, dispatch }}>
        {children}
    </DataContext.Provider>
  )
}

const useData=()=>useContext(DataContext);


export {DataProvider, useData}