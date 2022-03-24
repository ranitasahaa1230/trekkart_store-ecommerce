import axios from 'axios';
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const CategoryContext=createContext();

const CategoryProvider=({children})=>{
const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  
  useEffect(() => {
    (async () => {
      try {
        setError("");
        setLoader(true);
        const res = await axios.get("/api/categories");
        if (res.status === 200) {
            setCategories(res.data.categories);
          setLoader(false);
        }
      } catch (err) {
        setError(err.message);
        setLoader(false);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{categories, loader, error}}>
        {children}
    </CategoryContext.Provider>
  )
}

const useCategory = () => useContext(CategoryContext);


export {CategoryProvider, useCategory}