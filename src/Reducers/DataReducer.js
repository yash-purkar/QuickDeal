export const initialState = {
  filters: {
    priceRange: null,
    selectedCategories: [],
    selectedSizes: [],
    rating: null,
    sort: null,
    searchValue: null,
  },

  categories: [],
  products: [],
  cart: [],
  wishlist: []
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

    case "FILTER_BY_PRICE": return {
      ...state, filters: { ...state.filters, priceRange: action.payload }
    }

    case "FILTER_BY_CATEGORIES": return {
      ...state, filters: { ...state.filters, selectedCategories: state.filters.selectedCategories.includes(action.payload) ? state.filters.selectedCategories.filter(category => category !== action.payload) : [...state.filters.selectedCategories, action.payload] }
    }

    case "FILTER_BY_SIZE": return {
      ...state, filters: { ...state.filters, selectedSizes: state.filters.selectedSizes.includes(action.payload) ? state.filters.selectedSizes.filter(size => size !== action.payload) : [...state.filters.selectedSizes, action.payload] }
    }

    case "FILTER_BY_RATING": return {
      ...state, filters: { ...state.filters, rating: action.payload }
    }

    case "SORT_BY_PRICE": return {
      ...state, filters: { ...state.filters, sort: action.payload }
    }

    case "SEARCH_PRODUCT": return {
      ...state, filters: { ...state.filters, searchValue: action.payload }
    }

    case "CLEAR_ALL_FILTERS": return {
      ...state, filters: {
        searchValue: null,
        priceRange: 2000,
        sort: null,
        selectedCategories: [],
        selectedSizes: [],
        rating: null,
      }
    }

    case "CART_OPERATIONS": return {
      ...state, cart: action.payload
    }

    case "WISHLIST_OPERATIONS": return {
      ...state, wishlist: action.payload
    }
    default: return state;
  }
}
