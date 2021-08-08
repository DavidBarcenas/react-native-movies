import React, { useMemo } from 'react'
import { FlatList} from 'react-native';

import { movieImage } from '../../api/movieAPI'
import { Cast } from '../../interfaces/creditsInterface';
import { ActorItem } from '../ActorItem';

interface CastSliderProps {
    cast: Cast[];
}

const size = 80;
const noImage   = 'https://hescorp.com.mx/wp-content/themes/consultix/images/no-image-found-360x250.png'

export const CastSlider = ({cast}: CastSliderProps) => {
    const memoizedItem = useMemo(() => castItem, [cast]);
    
    return (
        <FlatList 
            data={cast}
            renderItem={memoizedItem}
            keyExtractor={(item: any) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        />
    )
}

const castItem = ({item}: any) => {
    const imagePath = movieImage + item.profile_path;
    const showImage = item.profile_path ? imagePath : noImage

    return <ActorItem image={showImage} actor={item} size={size} />
}