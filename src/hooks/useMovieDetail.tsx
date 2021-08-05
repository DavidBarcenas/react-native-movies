import { useEffect, useState } from 'react';
import movieAPI from '../api/movieAPI';
import { Cast, CastResponse } from '../interfaces/castInterface';
import { Detail } from '../interfaces/detailInterface';

interface MovieDetails {
    isLoading: boolean;
    details:   Detail | null;
    cast:      Cast[];
}

export const useMovieDetail = (movieID: number) => {
    const [movie, setMovies] = useState<MovieDetails>({
        isLoading: false,
        details: null,
        cast: [],
    })
    
    
    const getMovieDetails = async () => {
        const details = await movieAPI.get<Detail>(`/${movieID}`)
        const cast    = await movieAPI.get<CastResponse>(`/${movieID}/credits`)

        await Promise.all([details, cast])
            .then(resp => {
                setMovies({
                    ...movie,
                    details: resp[0].data,
                    cast: resp[1].data.cast,
                })
            })
            .catch(console.error)
            .finally(() => setMovies({...movie, isLoading: false}))
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {...movie}
}