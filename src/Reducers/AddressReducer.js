export const addressInitialState = {
  name: "",
  street: "",
  cityName: "",
  state: "",
  country: "",
  postalCode: "",
  mobileNumber: ""
}

export const addressReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_ADDRESS": return {
      ...state
    }

    default: return state;
  }
}