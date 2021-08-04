import React from 'react'
import { StyleSheet } from 'react-native';
import { Image, View } from 'react-native';

interface Props {
    poster:  string;
    height?: number;
    width?:  number;
    marginHorizontal?: number;
}

export const MoviePoster = ({
    poster, 
    height = 400, 
    width = 280, 
    marginHorizontal = 0
}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${poster}`

    return (
        <View style={{...styles.posterWrap, width, height, marginHorizontal}}>
            <Image source={{uri}} style={styles.posterImage} />
        </View>
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