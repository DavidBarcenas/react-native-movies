import React from 'react'
import { StyleSheet } from 'react-native';
import { Image, View } from 'react-native';

interface Props {
    poster: string;
}

export const MoviePoster = ({poster}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${poster}`
    
    return (
        <View style={styles.posterWrap}>
            <Image source={{uri}} style={styles.posterImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    posterWrap: {
        width: 280, 
        height: 400,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    posterImage: {
        flex: 1,
        borderRadius: 18
    }
})