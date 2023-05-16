import { products } from "../backend/db/products";

export const initialState = {
  categories: [],
  products: [],
}


export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_CATEGORIES": return {
      ...state,
      categories: action.payload
    }

    case "INITIALIZE_PRODUCTS": return {
      ...state, products: action.payload
    }
    default: return state;
  }
}