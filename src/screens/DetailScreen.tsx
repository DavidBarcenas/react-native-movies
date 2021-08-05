import React from 'react'
import { Button, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetail } from '../hooks/useMovieDetail';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const height = Dimensions.get('screen').height

export const DetailScreen = ({route, navigation}: Props) => {
    const movie = route.params
    const {state} = useMovieDetail(movie.id)
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    console.log(state)

    return (
        <View>
            <Image source={{uri}} style={styles.poster} />
            <Button title='Home' onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({
    poster: {
        width: '100%',
        height: height * 0.7
    }
})