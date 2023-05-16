import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../../Reducers/DataReducer";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories } = await response.json();
      dispatch({ type: "INITIALIZE_CATEGORIES", payload: categories })
    }
    catch (e) {
      console.error(e)
    }
  }
  console.log(state.categories)
  useEffect(() => {
    getCategories();
  }, [])

  return <DataContext.Provider value={{ state }}>
    {children}
  </DataContext.Provider>
}

export const DataState = () => useContext(DataContext);