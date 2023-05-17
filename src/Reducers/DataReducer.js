export const initialState = {
  filters: {
    searchValue: null,
    sort: null,
    selectedCategories: []
  },
  categories: [],
  products: [],
}

// const { filters } = initialState;

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

    case "SORT_BY_PRICE": return {
      ...state, filters: { ...state.filters, sort: action.payload }
    }

    case "SORT_BY_CATEGORIES": return {
      ...state, filters: { ...state.filters, selectedCategories: state.filters.selectedCategories.includes(action.payload) ? state.filters.selectedCategories.filter(category => category !== action.payload) : [...state.filters.selectedCategories, action.payload] }
    }

    default: return state;
  }
}