import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { RenderItem } from '../interfaces/sliderInterface';
import { Spinner } from '../components/Spinner';

const {width} = Dimensions.get('window');

export const HomeScreen = () => {
    const {top} = useSafeAreaInsets()
    const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies()

    if(isLoading) { return <Spinner /> }
    
    return (
        <ScrollView>
            <View style={{marginTop: top + 20}}>
                <View style={{height: 440}}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={carouselItem}
                        sliderWidth={width}
                        itemWidth={280}
                    />
                </View>
                <HorizontalSlider movies={popular} title='Populares' />
                <HorizontalSlider movies={topRated} title='Mejor valoradas' />
                <HorizontalSlider movies={upcoming} title='Próximamente' />
            </View>
        </ScrollView>
    )
}

const carouselItem = ({item}: RenderItem) => {
    return <MoviePoster movie={item} />
}