import React, { useContext, useEffect, useMemo } from 'react'
import Carousel from 'react-native-snap-carousel';
import { Dimensions, View, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RenderItem } from '../interfaces/sliderInterface';
import { movieImage } from '../api/movieAPI';
import { useMovies } from '../hooks/useMovies';
import { Spinner } from '../components/Spinner';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const {width} = Dimensions.get('window');

export const HomeScreen = () => {
    const {setImageColors} = useContext(GradientContext)
    const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies()
    const {top} = useSafeAreaInsets()
    const memoizedItem = useMemo(() => carouselItem, [nowPlaying]);

    const getPosterColors = async (index: number) => {
        const urlImage = `${movieImage}${nowPlaying[index].poster_path}` 
        const [primary = '#fff', secondary = '#222'] = await getImageColors(urlImage)

        setImageColors({primary, secondary})
    }

    useEffect(() => {
        if(nowPlaying.length > 0) {
            getPosterColors(0)
        }
    }, [nowPlaying])

    if(isLoading) { return <Spinner /> }
    
    return (
        <ScrollView>
            <GradientBackground>
                <View style={{height: 440,paddingTop: top + 20}}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={memoizedItem}
                        sliderWidth={width}
                        itemWidth={240}
                        onSnapToItem={(index) => getPosterColors(index)}
                    />
                </View>
            </GradientBackground>
            <HorizontalSlider movies={popular} title='Populares' />
            <HorizontalSlider movies={topRated} title='Mejor valoradas' />
            <HorizontalSlider movies={upcoming} title='Próximamente' />      
        </ScrollView>            
    )
}

const carouselItem = ({item}: RenderItem) => {
    return <MoviePoster movie={item} width={240} height={360} />
}