import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

interface CarouselItemProps {
    item:  Movie; 
    index: number;
}

export const HorizontalSlider = ({title, movies}: Props) => {
    return (
        <View>
            <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 10, paddingLeft: 10}}>{title}</Text>
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

const carouselItem = ({item}: CarouselItemProps) => {
    return <MoviePoster poster={item.poster_path} width={140} height={200} marginHorizontal={7} />
}