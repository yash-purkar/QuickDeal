import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../../Reducers/DataReducer";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)
  // const getProductsData = async () => {
  //   const { products } = await fetch("/api/products")
  //   console.log(products, ":")
  // }
  // console.log(products)
  useEffect(() => {
    // getProductsData()
  }, [])

  return <DataContext.Provider value={{ state }}>
    {children}
  </DataContext.Provider>
}

export const DataState = () => useContext(DataContext);