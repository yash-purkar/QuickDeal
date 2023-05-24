import { createContext, useContext, useReducer } from "react";
import { addressInitialState, addressReducer } from "../../Reducers/AddressReducer";

const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(addressReducer, addressInitialState);

  return (
    <AddressContext.Provider value={{ addressState, addressDispatch }}>{children}</AddressContext.Provider>
  )
}

export const AddressState = () => useContext(AddressContext);