import React from 'react'
import { Button, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetail } from '../hooks/useMovieDetail';
import LinearGradient from 'react-native-linear-gradient';
import { movieImage } from '../api/movieAPI';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const height = Dimensions.get('screen').height
const bRadius = 90

export const DetailScreen = ({route, navigation}: Props) => {
    const movie = route.params
    const {isLoading, cast, details} = useMovieDetail(movie.id)

    return (
        <>
            <View style={styles.bgHeader}>
                <Image 
                    source={{uri: `${movieImage}${movie.backdrop_path}`}} 
                    style={styles.poster} 
                />
                <LinearGradient  
                    colors={["transparent", "black"]} 
                    locations={[0.4, 1.2]} 
                    style={styles.linearGradient} />
                <Icon name="rocket" size={30} color="#fff" style={{ position: 'absolute', top: 0, left: 0}}/>
            </View>
            <View style={styles.detailWrap}>
                <View style={styles.detailHeader}>
                    <Image 
                        source={{uri: `${movieImage}${movie.poster_path}`}}  
                        style={styles.detailPoster} 
                    />
                    <>
                        <Text>{movie.title}</Text>
                    </>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    bgHeader: {
        height: height * 0.25,
        overflow: 'hidden',
    },
    detailWrap: {
        paddingHorizontal: 20
    },
    detailHeader: {
        flexDirection: 'row'
    },
    detailPoster: {
        width: 140,
        height: 200,
        top: -80
    },
    poster: {
        width: '100%',
        height: '100%',
    },
    linearGradient: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})