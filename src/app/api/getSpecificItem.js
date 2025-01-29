import axios from 'axios'

const baseURL = 'http://localhost:6060/supply/'
export default async function getSpecificItem(category) {
    try {
        const response = await axios.get(baseURL + `getItemById?category=${category.category}&itemId=${category.itemId}`)
        return response.data
    } catch (error) {
        return console.log(error);
    }
}