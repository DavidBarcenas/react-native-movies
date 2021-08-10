import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { movieImage } from '../api/movieAPI';
import { RootStackParams } from '../navigation/Navigation';
import { globalStyles, themeColors } from '../theme/global';

interface ActorScreenProps extends StackScreenProps<RootStackParams, 'Actor'> {}

export const ActorScreen = ({route}: ActorScreenProps) => {
    const actor = route.params

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={globalStyles.row}>
                        <Image source={{uri: movieImage + actor.profile_path}} style={styles.avatar} />
                        <View>
                            <Text style={styles.name}>{actor.name}</Text>
                            <Text style={styles.character}>{actor.character}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const size = 120

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    avatar: {
        width: size,
        height: size,
        borderRadius: 100,
        marginRight: 20
    },
    name: {
        fontSize: 18,
        color: themeColors.white,
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    character: {
        fontSize: 14,
        color: '#ccc'
    }
})