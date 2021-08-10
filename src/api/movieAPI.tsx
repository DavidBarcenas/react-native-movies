import axios from 'axios';
import {API_KEY} from 'react-native-dotenv'

export const movieImage = 'https://image.tmdb.org/t/p/w500'

const movieAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
        language: 'es-MX'
    }
})


export default movieAPI