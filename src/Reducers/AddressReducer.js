export const addressInitialState = {
  addresses: [{
    name: "Yash Purkar",
    street: "Akshya Nagar 1st Block 1st Cross",
    cityName: "Bangalore",
    state: "Karanataka",
    country: "India",
    postalCode: "560016",
    mobileNumber: "055-6985-779"
  }]
}

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_ADDRESS": return {
      ...state, addresses: [...state.addresses, action.payload]
    }

    case "REMOVE_ADDRESS": return {
      ...state, addresses: state.addresses.filter((addr, index) => index !== action.payload)
    }
    default: return state;
  }
}