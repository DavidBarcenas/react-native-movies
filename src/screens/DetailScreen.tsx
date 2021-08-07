import React from 'react'
import { Button, Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams, Navigation } from '../navigation/Navigation';
import { useMovieDetail } from '../hooks/useMovieDetail';
import LinearGradient from 'react-native-linear-gradient';
import { movieImage } from '../api/movieAPI';
import { Backdrop } from '../components/details/Backdrop';

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
            {/* <View style={styles.bgHeader}>
                <Image 
                    source={{uri: `${movieImage}${movie.backdrop_path}`}} 
                    style={styles.poster} 
                />
                <LinearGradient  
                    colors={["transparent", "black"]} 
                    locations={[0.4, 1.2]} 
                    style={styles.linearGradient} />
                <TouchableOpacity 
                    onPress={() => navigation.goBack()}  
                    style={{ 
                        position: 'absolute', 
                        top: 10, 
                        left: 10
                    }}>
                    <Icon 
                        name="chevron-back-outline" 
                        size={30} 
                        color="#fff" 
                    />
                </TouchableOpacity>
            </View> */}
            <View style={styles.detailWrap}>
                <View style={styles.detailHeader}>
                    <Image 
                        source={{uri: `${movieImage}${movie.poster_path}`}}  
                        style={styles.detailPoster} 
                    />
                    <View style={{ width: (width - 195), marginTop: 10}}>
                        <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase'}}>{movie.title}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon 
                                    name="star" 
                                    size={20} 
                                    color="yellow" 
                                />
                                <Text style={{color: '#fff'}}>{movie.vote_average}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Icon 
                                    name="time-outline" 
                                    size={20} 
                                    color="yellow" 
                                />
                                <Text style={{color: '#fff'}}>{details?.runtime} min.</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                            {
                                details?.genres.map(item => <Text key={item.id} style={{color: '#fff'}}>{item.name}</Text>)
                            }
                        </View>
                    </View>
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
        flexDirection: 'row',
    },
    detailPoster: {
        width: 140,
        height: 200,
        top: -80,
        marginRight: 15
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