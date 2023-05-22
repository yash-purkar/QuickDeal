import { createContext, useContext, useReducer, useState } from "react";
import { orderInitialState, orderReducer } from "../../Reducers/OrderReducer";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [orderState, orderDispatch] = useReducer(orderReducer, orderInitialState);
  const [couponInfo, setCouponInfo] = useState({ name: "", value: 0 })

  return (
    <OrderContext.Provider value={{ orderState, orderDispatch, couponInfo, setCouponInfo }}>
      {children}
    </OrderContext.Provider>
  )
}

export const OrderState = () => useContext(OrderContext);