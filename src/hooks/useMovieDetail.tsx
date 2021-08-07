import { useEffect, useState } from 'react';
import movieAPI from '../api/movieAPI';
import { CreditResponse } from '../interfaces/creditsInterface';
import { Detail, MovieDetailState } from '../interfaces/detailInterface';

export const useMovieDetail = (movieID: number) => {
    const [movie, setMovies] = useState<MovieDetailState>({
        isLoading: true,
        details: undefined,
        cast: [],
    })
    
    const getMovieDetails = async () => {
        const details = await movieAPI.get<Detail>(`/${movieID}`)
        const cast    = await movieAPI.get<CreditResponse>(`/${movieID}/credits`)

        await Promise.all([details, cast])
            .then(resp => {
                setMovies({
                    isLoading: false,
                    details: resp[0].data,
                    cast: resp[1].data.cast,
                })
            })
            .catch(() => {
                setMovies({
                    ...movie,
                    isLoading: false,
                })
            })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {...movie}
}