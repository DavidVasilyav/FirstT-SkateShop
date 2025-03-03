'use server'
import axios from 'axios'
import { cookies } from "next/headers";
const baseURL = 'http://localhost:6060/'

export default async function getCookies() {

  const cookiesStore = await cookies();
  const token = cookiesStore.get('sessionToken')
  try {
        // const response = await axios.get('http://localhost:6060/protected', token, )
        const response = await axios.post(baseURL + 'protected', JSON.stringify(token), {
                    // withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                } );
        return response.data.userInfo.userInfo
    } catch (error) {
      console.log(error);

        return console.log(error);
    }
}