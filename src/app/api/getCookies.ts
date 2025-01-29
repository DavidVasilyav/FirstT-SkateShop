'use server'
import axios from 'axios'
import { cookies } from "next/headers";

// export default async function getCookies() {
//   const cookiesStore = await cookies();
//   console.log(["newcookie", cookiesStore.get("sessionToken")]);
//   return 123;
// }

// export default async function getCookies() {
// const cookiesStore = await cookies();

//   let token =  cookiesStore.get("sessionToken")
//   // console.log(token);
//   return token;
// }

const baseURL = 'http://localhost:6060/'
export default async function getCookies() {

let cookiesStore = await cookies();
let token = cookiesStore.get('sessionToken')
  try {
        // const response = await axios.get('http://localhost:6060/protected', token, )
        const response = await axios.post(baseURL + 'protected', JSON.stringify(token), {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                } );
                // console.log(response.data.userInfo.userInfo);
        return response.data.userInfo.userInfo
    } catch (error) {
      console.log('not success');

        return console.log(error);
    }
}