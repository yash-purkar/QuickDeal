import { products } from "../backend/db/products";

export const initialState = {
  categories: [],
  products: products
}


export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CATEGORIES": return {
      ...state,
      categories: action.payload
    }

    default: return state;
  }
}