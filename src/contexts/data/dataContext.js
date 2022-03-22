import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const DataContext=createContext();

const DataProvider=({children})=>{
const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  
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
    <DataContext.Provider value={{products, loader, error}}>
        {children}
    </DataContext.Provider>
  )
}

const useData=()=>useContext(DataContext);


export {DataProvider, useData}