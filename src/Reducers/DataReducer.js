export const initialState = {
  filters: {
    searchValue: ""
  },
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

    case "SEARCH_PRODUCT": return {
      ...state, filters: { ...state.filters, searchValue: action.payload }
    }

    default: return state;
  }
}