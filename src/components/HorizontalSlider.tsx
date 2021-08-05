import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { HorizontalSliderProps, RenderItem } from '../interfaces/sliderInterface';
import { MoviePoster } from './MoviePoster';

export const HorizontalSlider = ({title, movies}: HorizontalSliderProps) => {
    return (
        <View style={styles.sliderWrap}>
            {title && <Text style={styles.sliderTitle}>{title}</Text>}
            <FlatList 
                data={movies}
                renderItem={carouselItem}
                keyExtractor={(item: any) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const carouselItem = ({item}: RenderItem) => {
    return (
        <View>
            <MoviePoster 
                movie={item} 
                marginHorizontal={7} 
                width={140} 
                height={200} 
            />
            <Text 
                numberOfLines={1} 
                ellipsizeMode='tail' 
                style={styles.sliderItemTitle}
            >{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderWrap: {
        marginBottom: 24
    },
    sliderTitle: {
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        paddingLeft: 10
    },
    sliderItemTitle: {
        marginHorizontal: 10, 
        width: 140, 
        fontWeight: 'bold'
    }
})