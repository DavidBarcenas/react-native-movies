import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie:   Movie;
    height?: number;
    width?:  number;
    marginHorizontal?: number;
}

export const MoviePoster = ({
    movie, 
    height = 400, 
    width = 280, 
    marginHorizontal = 0,
}: Props) => {
    const {navigate} = useNavigation()
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('Detail', movie)}>
            <View style={{...styles.posterWrap, width, height, marginHorizontal}}>
                <Image source={{uri}} style={styles.posterImage} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    posterWrap: {
        backgroundColor: '#fff',
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 10,
        marginBottom: 10
    },
    posterImage: {
        flex: 1,
        borderRadius: 18
    }
})