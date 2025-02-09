const axios = require('axios').default;

const baseURL = "http://localhost:6060/user/";
export async function loginUser(data: object) {
  try {
    const response = await axios.post(baseURL + "login", data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
}

export async function registerUser(data: object) {
  try {
    const response = await axios.post(baseURL + `register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function userBasket(data: object) {
  console.log(333);
  try {
    const response = await axios.get(baseURL + "getBasket/?ID=1",)

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}
// http://localhost:6060/set-cookies

export async function setCookies() {
  console.log(123);
  try {
    const response = await axios.post(baseURL + `set-cookies`, "cookie", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return console.log(error);
  }
}
