import { useEffect, useState } from "react"
import movieAPI from "../api/movieAPI"
import { MovieResponse, Movie, MovieState } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState<MovieState>({
        nowPlaying: [],
        popular:    [],
        topRated:   [],
        upcoming:   [],
    })
    
    const getMovies = async () => {
        const nowPlaying = movieAPI.get<MovieResponse>('/now_playing')
        const popular    = movieAPI.get<MovieResponse>('/popular')
        const topRated   = movieAPI.get<MovieResponse>('/top_rated')
        const upcoming   = movieAPI.get<MovieResponse>('/upcoming')

        await Promise.all([nowPlaying, popular, topRated, upcoming])
            .then(resp => {
                setMovies({
                    nowPlaying: resp[0].data.results,
                    popular:    resp[1].data.results,
                    topRated:   resp[2].data.results,
                    upcoming:   resp[3].data.results,
                })
            })
            .catch(console.error)
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        isLoading,
        ...movies
    }

}