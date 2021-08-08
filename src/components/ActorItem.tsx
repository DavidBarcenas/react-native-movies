import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '../theme/global'
import { Cast } from '../interfaces/creditsInterface';
import { useNavigation } from '@react-navigation/native';

interface ActorProps {
    image: string;
    actor: Cast;
    size:  number;
}

export const ActorItem = ({image, actor, size}: ActorProps) => {    
    const {navigate} = useNavigation()
    return (
        <View style={{...styles.itemWrap, width:size}}>
            <TouchableOpacity onPress={() => navigate('Actor', actor)}>
                <Image 
                    source={{uri: image}} 
                    style={{
                        ...styles.itemImage, 
                        width: size, 
                        height: size
                    }} 
                />
            </TouchableOpacity>
            <Text style={styles.itemText}>{actor.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemWrap: {
        marginRight: 18,
    },
    itemImage: {
        borderRadius: 100,
        marginBottom: 10
    },
    itemText: {
        color: themeColors.white,
        textAlign: 'center'
    }
})