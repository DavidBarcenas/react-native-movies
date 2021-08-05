import { useEffect, useState } from 'react';
import movieAPI from '../api/movieAPI';

interface MovieDetails {
    isLoading: boolean;
    cast: any;
    details: any
}

export const useMovieDetail = (movieID: number) => {
    const [state, setState] = useState<MovieDetails>()    

    const getMovieDetails = async () => {
        await movieAPI.get<any>(`/${movieID}`)
            .then(resp => setState(resp.data.overview))
            .catch(console.error)
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {state}
}