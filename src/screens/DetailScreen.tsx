import React from 'react'
import { Button, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams, Navigation } from '../navigation/Navigation';
import { useMovieDetail } from '../hooks/useMovieDetail';
import LinearGradient from 'react-native-linear-gradient';
import { movieImage } from '../api/movieAPI';
import { Backdrop } from '../components/details/Backdrop';
import { Header } from '../components/details/Header';
import { themeColors } from '../theme/global';
import { Spinner } from '../components/Spinner';
import { CastSlider } from '../components/details/CastSlider';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const {height, width} = Dimensions.get('screen')
const bRadius = 90

export const DetailScreen = ({route, navigation}: Props) => {
    const movie = route.params
    const {isLoading, cast, details} = useMovieDetail(movie.id)

    return (
        <>
            <Backdrop 
                imagePath={movieImage + movie.backdrop_path} 
                navigation={navigation} 
                height={height} 
            />
            <View style={styles.wrap}>
                <Header 
                    imagePath={movieImage + movie.poster_path}
                    vote_average={movie.vote_average}
                    runtime={details?.runtime}
                    genres={details?.genres}
                    title={movie.title}
                    width={width}
                />
                <Text style={styles.title}>Sinopsis</Text>
                <Text style={styles.synopsis}>{movie.overview}</Text>

                {
                    isLoading ? <Spinner /> :
                    <>
                        <Text style={styles.title}>Actores</Text>
                        <CastSlider cast={cast} />
                    </>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrap: {
        paddingHorizontal: 20,
    },
    title: {
        color: themeColors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 15
    },
    synopsis: {
        color: themeColors.white,
        marginBottom: 30
    }
})