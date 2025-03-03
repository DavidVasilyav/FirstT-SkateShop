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
    console.error('Error fetching data:', error);
    return error

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
    console.error('Error fetching data:', error);
    return error;
  }
}

export async function setCookies() {
  try {
    const response = await axios.post(baseURL + `set-cookies`, "cookie", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function userBasket(data: any) {
  try {
    const response = await axios.get(baseURL + "getBasket/?ID=1",)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return error
  }
}
// http://localhost:6060/set-cookies


export async function addToBasket(data: object) {
  console.log(data);
  try {
    const response = await axios.post(baseURL + `addToBasket`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function removeFromBasket(data: object) {
  console.log(data);
  try {
    const response = await axios.post(baseURL + `removeFromBasket`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({message: 'success'});
    return response.data;
  } catch (error) {
    console.log({error, message :'פריט עדיין בסל'});
    return 'פריט עדיין בסל';
  }
}

export async function updateQuantity(data: object) {
  console.log(data);
  try {
    const response = await axios.post(baseURL + `decrementItem`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({message: 'פריט ירד ב1'});
    return response.data;
  } catch (error) {
    console.log({error, message :'פריט לא ירד'});
    return 'פריט עדיין בסל';
  }
}

export async function updateQuantityIncrement(data: object) {
  console.log(data);
  try {
    const response = await axios.post(baseURL + `incrementItem`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log({message: 'פריט עלה ב1'});
    return response.data;
  } catch (error) {
    console.log({error, message :'פריט לא עלה'});
    return 'פריט לא השתנה בסל';
  }
}