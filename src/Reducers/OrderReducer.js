export const orderInitialState = {
  price: 0,
  discount: 0,
  couponDiscount: 0,
  totalAmount: 0,
  orderedItems: [],
  selectedAddr: {}
}

export const orderReducer = (state, action) => {
  const { price, discount, couponDiscount, totalAmount } = action.payload;
  switch (action.type) {
    case "CHECKOUT": return {
      ...state, price, discount, couponDiscount, totalAmount
    }

    case "ORDERED_ITEMS": return {
      ...state, orderedItems: action.payload
    }

    case "SET_SELECTED_ADDR": return {
      ...state, selectedAddr: action.payload
    }
    default: return state;
  }
}