import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../interfaces/movieInterface';

interface CarouselItemProps {
    item: Movie; 
    index: number;
}

const {width} = Dimensions.get('window');

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
            <View style={{height: 420}}>
                <Carousel
                    data={moviesNow}
                    renderItem={(carouselItem)}
                    sliderWidth={width}
                    itemWidth={280}
                />
            </View>
        </View>
    )
}

const carouselItem = ({item}: CarouselItemProps) => {
    return <MoviePoster poster={item.poster_path} />
}