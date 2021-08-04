import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { RenderItem } from '../interfaces/sliderInterface';

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
        <ScrollView>
            <View style={{marginTop: top + 20}}>
                <View style={{height: 440}}>
                    <Carousel
                        data={moviesNow}
                        renderItem={carouselItem}
                        sliderWidth={width}
                        itemWidth={280}
                    />
                </View>
                <HorizontalSlider movies={moviesNow} title='Popular Movies' />
                <HorizontalSlider movies={moviesNow} title='Comming Soon' />
            </View>
        </ScrollView>
    )
}

const carouselItem = ({item}: RenderItem) => {
    return <MoviePoster poster={item.poster_path} />
}