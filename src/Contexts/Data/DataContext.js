import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { dataReducer, initialState } from "../../Reducers/DataReducer";

const DataContext = createContext();
const token = localStorage.getItem("encodedToken");
export const DataContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(token)
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories } = await response.json();
      dispatch({ type: "INITIALIZE_CATEGORIES", payload: categories })
    }
    catch (e) {
      console.error(e)
    }
    finally {
      setLoading(false)
    }
  }

  const getProducts = async () => {
    try {
      const resp = await fetch("/api/products");
      const { products } = await resp.json();
      dispatch({ type: "INITIALIZE_PRODUCTS", payload: products });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false)
    }

  }


  useEffect(() => {
    getCategories();
    getProducts();
  }, [])



  return <DataContext.Provider value={{ state, dispatch, isLoggedIn, setIsLoggedIn, setLoading }}>
    {
      loading ? <h1>Loading....</h1> : <>{children}</>
    }
  </DataContext.Provider>
}

export const DataState = () => useContext(DataContext);