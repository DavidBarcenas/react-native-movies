import React, { useMemo } from 'react'
import { FlatList, Image, Text, View, StyleSheet } from 'react-native';
import { movieImage } from '../../api/movieAPI'
import { themeColors } from '../../theme/global';
import { Cast } from '../../interfaces/creditsInterface';

interface CastSliderProps {
    cast: Cast[]
}

const size = 80;

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
    const noImage   = 'https://hescorp.com.mx/wp-content/themes/consultix/images/no-image-found-360x250.png'
    const showImage = item.profile_path ? imagePath : noImage

    return (
        <View style={styles.itemWrap}>
            <Image source={{uri: showImage}} style={styles.itemImage} />
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemWrap: {
        width: size,
        marginRight: 18,
    },
    itemImage: {
        width: size,
        height: size,
        borderRadius: 100,
        marginBottom: 10
    },
    itemText: {
        color: themeColors.white,
        textAlign: 'center'
    }
})