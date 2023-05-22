export const orderInitialState = {
  price: 0,
  discount: 0,
  couponDiscount: 0,
  totalAmount: 0,

}

export const orderReducer = (state, action) => {
  const { price, discount, couponDiscount, totalAmount } = action.payload;
  switch (action.type) {
    case "CHECKOUT": return {
      ...state, price, discount, couponDiscount, totalAmount
    }


    default: return state;
  }
}