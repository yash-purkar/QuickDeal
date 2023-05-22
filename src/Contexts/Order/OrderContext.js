import { createContext, useContext, useReducer } from "react";
import { orderInitialState, orderReducer } from "../../Reducers/OrderReducer";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, orderInitialState);

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch }}>
      {children}
    </OrderContext.Provider>
  )
}

export const OrderState = () => useContext(OrderContext);