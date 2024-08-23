import axios from "axios";

const BaseUrl = "http://localhost:3000";

// Login API
export const Loginapi = async (data) => {
  try {
    const response = await axios.post(
      `${BaseUrl}/users/login`,
      data,
      { withCredentials: true } // Ensure cookies are included in the request
    );
    return response; // Return the data directly
  } catch (error) {
    // Return the error response or a custom error message
    return error.response ? error.response.data : { msg: "Server error" };
  }
}

// Register API
export const RegisterApi = async (data) => {
  try {
    const { first_name, last_name, email, password } = data;
    const response = await axios.post(
      `${BaseUrl}/users/register`,
      {
        name: `${first_name} ${last_name}`,
        email,
        password,
      },
      { withCredentials: true } // Ensure cookies are included in the request
    );
    return response; // Return the data directly
  } catch (error) {
    // Return the error response or a custom error message
    return error.response ? error.response.data : { msg: "Server error" };
  }
}

// Update Profile API
export const UpdateProfile = async (data) => {
  try {
    const response = await axios.post(
      `${BaseUrl}/users/update_user`,
      data,
      { withCredentials: true } // Ensure cookies are included in the request
    );
    return response; // Return the data directly
  } catch (error) {
    // Return the error response or a custom error message
    return error.response ? error.response.data : { msg: "Server error" };
  }
}
export const GetUserData = async (userId) => {
  try {
    const response = await axios.post(
      `${BaseUrl}/users/get_user`,
      {
        userId:userId
      },
      { withCredentials: true } // Ensure cookies are included in the request
    );
    return response; // Return the data directly
  } catch (error) {
    // Return the error response or a custom error message
    return error.response ? error.response.data : { msg: "Server error" };
  }
}
export const GetAllUsers = async () => {
  try {
    const response = await axios.get(
      `${BaseUrl}/users/get_all_users`,
      { withCredentials: true } // Ensure cookies are included in the request
    );
    return response; // Return the data directly
  } catch (error) {
    // Return the error response or a custom error message
    return error.response ? error.response.data : { msg: "Server error" };
  }
}
export const AddYourJourney = async (formData) => {
  try {
    const response = await axios.post(
      `${BaseUrl}/upload`,
      formData,
      { 
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true // Ensure cookies are included in the request
      }
    );
    return response; // Return the data directly
  } catch (error) {
    // Return the error response or a custom error message
    return error.response ? error.response.data : { msg: "Server error" };
  }
}


