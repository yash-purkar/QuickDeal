import { failed, success, warning } from "../Toasts/ToastServices";

// User Login Handler
export const loginUser = async (email, password, dispatch, setIsLoggedIn, navigate, prevLocation) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: "POST",
      body: JSON.stringify({ email, password })
    })

    const data = await response.json();
    const { encodedToken, foundUser } = data;

    if (response.status === 200) {

      localStorage.clear()
      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("encodedToken", encodedToken);

      success("Login Succesful")
      setIsLoggedIn(true)
      if (prevLocation) navigate(prevLocation)
      else navigate("/productlisting")

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
      localStorage.setItem("user", JSON.stringify(foundUser))
      localStorage.setItem("encodedToken", encodedToken);

      setIsLoggedIn(true)
      success("Login Succesful")
      if (prevLocation) navigate(prevLocation)
      else navigate("/productlisting")
      //for signup
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

    if (response.status === 200 || response.status === 201) {

      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(createdUser));
      localStorage.setItem("encodedToken", encodedToken);

      setIsLoggedIn(true)
      navigate("/productlisting")
      success("SignUp Succesful")
    }
    else {
      warning("Email Already Exist")
    }

  } catch (e) {
    failed("Something Went Wrong")
  }

}