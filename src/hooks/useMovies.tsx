import { useEffect, useState } from "react"
import movieAPI from "../api/movieAPI"
import { MovieResponse, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesNow, setMoviesNow] = useState<Movie[]>([])
    
    const getMovies = async () => {
        await movieAPI.get<MovieResponse>('/now_playing')
            .then(resp => setMoviesNow(resp.data.results))
            .catch(console.error)
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        moviesNow,
        isLoading
    }

}