export const orderInitialState = {
  price: 0,
  discount: 0,
  couponName: "",
  couponDisc: 0,
  totalAmount: 0,

}

export const orderReducer = (state, action) => {
  switch (action.type) {
    case "COUPON_DETAILS": return {
      ...state, couponName: action.payload.name, couponDisc: action.payload.discount
    }


    default: return state;
  }
}