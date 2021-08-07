import React, { useMemo } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { HorizontalSliderProps, RenderItem } from '../interfaces/sliderInterface';
import { MoviePoster } from './MoviePoster';
import { themeColors } from '../theme/global';

export const HorizontalSlider = ({title, movies}: HorizontalSliderProps) => {
    const memoizedItem = useMemo(() => sliderItem, [movies]);

    return (
        <View style={styles.sliderWrap}>
            {title && <Text style={styles.sliderTitle}>{title}</Text>}
            <FlatList 
                data={movies}
                renderItem={memoizedItem}
                keyExtractor={(item: any) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{paddingHorizontal: 10}}
            />
        </View>
    )
}

const sliderItem = ({item}: RenderItem) => {
    return (
        <View style={styles.sliderItem}>
            <MoviePoster 
                movie={item} 
                width={140} 
                height={200} 
            />
            <Text 
                numberOfLines={2} 
                ellipsizeMode='tail' 
                style={styles.sliderItemTitle}
            >
                {item.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sliderWrap: {
        marginBottom: 24
    },
    sliderItem: {
        width: 140,
        marginRight: 10
    },
    sliderTitle: {
        color: themeColors.white,
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 10, 
        paddingLeft: 10
    },
    sliderItemTitle: {
        color: themeColors.white,
        marginHorizontal: 10, 
        fontWeight: 'bold',
        textAlign: 'center',
    }
})