import { failed, success, warning } from "../Toasts/ToastServices";

// User Login Handler
export const loginUser = async (email, password, dispatch, setIsLoggedIn, navigate, prevLocation) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: "POST",
      body: JSON.stringify({ email, password })
    })
    console.log(response)
    const data = await response.json();
    const { encodedToken, foundUser } = data;

    if (response.status === 200) {
      localStorage.clear()
      dispatch({ type: "encodedToken", payload: encodedToken })

      localStorage.setItem("user", JSON.stringify(foundUser))

      success("Login Succesful")
      setIsLoggedIn(true)
      navigate(prevLocation)
    }

    else {
      warning("No Data Found")
    }
  }

  catch (e) {
    failed("Something Went Wrong")
  }

}

// Login As A Guest Handler
export const loginAsGuest = async (creds, dispatch, setIsLoggedIn, navigate, prevLocation) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: "POST",
      body: JSON.stringify(creds)
    })

    const data = await response.json();

    const { foundUser, encodedToken } = data;

    if (response.status === 200 || response.status === 201) {
      localStorage.clear()
      dispatch({ type: "SET_TOKEN", payload: encodedToken })
      localStorage.setItem("user", JSON.stringify(foundUser))

      setIsLoggedIn(true)
      success("Login Succesful")
      navigate(prevLocation)
    }
    else {
      warning("Data Not Found")
    }
  }

  catch (e) {
    failed("Something Went Wrong")
  }
}


// SignUpUser 

export const signUpUser = async (user, dispatch, setIsLoggedIn, navigate) => {
  try {
    const response = await fetch('/api/auth/signup', {
      method: "POST",
      body: JSON.stringify(user)
    });
    const data = await response.json();
    const { createdUser, encodedToken } = data;
    console.log(response)
    if (response.status === 200 || response.status === 201) {
      localStorage.clear();

      dispatch({ type: "SET_TOKEN", payload: encodedToken })

      localStorage.setItem("user", JSON.stringify(createdUser))

      setIsLoggedIn(true)
      navigate("/productlisting")
      success("SignUp Succesful")
    }
    else {
      warning("Email Already Exist")
    }

  } catch (e) {
    console.log(e)
    failed("Something Went Wrong")
  }

}