export const addressInitialState = {
  addressDetails: {
    name: "",
    street: "",
    cityName: "",
    state: "",
    country: "",
    postalCode: null,
    mobileNumber: null
  },

  addresses: [{
    id: new Date().getTime().toString(),
    name: "Yash Purkar",
    street: "Akshya Nagar 1st Block 1st Cross",
    cityName: "Bangalore",
    state: "Karanataka",
    country: "India",
    postalCode: 560016,
    mobileNumber: 556985779
  }]
}

export const addressReducer = (state, action) => {

  switch (action.type) {
    case "ADD_NEW_ADDRESS": return {
      ...state, addresses: [...state.addresses, action.payload]
    }

    case "REMOVE_ADDRESS": return {
      ...state, addresses: state.addresses.filter((addr, i) => addr.id !== action.payload)
    }

    case "SELECT_ADDRESS_TO_EDIT": return {
      ...state, addressDetails: action.payload
    }

    case "CLEAR_ADDRESS_DETAILS": return {
      ...state, addressDetails: { ...addressInitialState.addressDetails }
    }

    case "UPDATE_ADDRESS": return {
      ...state, addresses: action.payload
    }

    default: return state;
  }
}
