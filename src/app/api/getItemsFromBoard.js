import axios from 'axios'

const baseURL = 'http://localhost:6060/'
export default async function getItemsFromBoard(category) {
    console.log(category);
    try {
        const response = await axios.get(baseURL + `supply/getAllItems?category=${category}`)
        console.log(response.data);
        return response.data
    } catch (error) {
        return console.log(error);
    }
}