import {useState, useEffect} from 'react';
import movieAPI from '../api/movieAPI';
import { Actor } from '../interfaces/ActorInterface';
import { Movie } from '../interfaces/movieInterface';

interface ActorState {
    isLoading: boolean;
    details: Actor | null;
    movies: Movie[];
}

export const useActorDetail = (actorID: number) => {
    const [details, setDetails] = useState<ActorState>({
        isLoading: true,
        details: null,
        movies: []
    })

    const getActorDetails = async () => {
        const info = await movieAPI.get<Actor>(`/person/${actorID}`)
        const movies = await movieAPI.get<any>(`/person/${actorID}/movie_credits`)

        await Promise.all([info, movies])
            .then(resp => {
                setDetails({
                    isLoading: false,
                    details: resp[0].data,
                    movies: resp[1].data.cast
                })
            })
            .catch(() => {
                setDetails({
                    ...details,
                    isLoading: false,
                })
            })
    }

    useEffect(() => {
        getActorDetails()
    }, [])

    return {...details}
}
