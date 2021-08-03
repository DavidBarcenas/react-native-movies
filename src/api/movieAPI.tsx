import axios from 'axios';
import {API_KEY} from 'react-native-dotenv'

const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: API_KEY,
        language: 'es-MX'
    }
})

export default movieAPI