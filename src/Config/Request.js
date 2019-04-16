import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

const Config = {
	baseURL:  BASE_URL
}

const axiosAPI = axios.create({
    ...Config,
    headers: {
        'Content-Type': 'application/json'
    }
})

const API = axiosAPI

export default API