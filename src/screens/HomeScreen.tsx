import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
    const {moviesNow, isLoading} = useMovies()

    if(isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="purple" size={40} />
            </View>
        )
    }

    return (
        <View>
            <Text>{moviesNow[0].title}</Text>
        </View>
    )
}
