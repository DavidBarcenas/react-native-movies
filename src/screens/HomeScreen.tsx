import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
    const {top} = useSafeAreaInsets()
    const {moviesNow, isLoading} = useMovies()

    if(isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="purple" size={40} />
            </View>
        )
    }

    return (
        <View style={{marginTop: top + 20}}>
            <MoviePoster poster={moviesNow[5].poster_path} />
        </View>
    )
}
