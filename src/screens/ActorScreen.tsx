import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react'
import { Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { movieImage } from '../api/movieAPI';
import { RootStackParams } from '../navigation/Navigation';
import { globalStyles, themeColors } from '../theme/global';
import { useActorDetail } from '../hooks/useActorDetail';
import { Spinner } from '../components/Spinner';
import { Dimensions } from 'react-native';
import { HorizontalSlider } from '../components/HorizontalSlider';

interface ActorScreenProps extends StackScreenProps<RootStackParams, 'Actor'> {}

const width = Dimensions.get('window').width

export const ActorScreen = ({route}: ActorScreenProps) => {
    const {name, character, profile_path, id} = route.params
    const {isLoading, details, movies} = useActorDetail(id)
    const [sliceText, setSliceText] = useState(true)

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Image source={{uri: movieImage + profile_path}} style={styles.avatar} />
                    <View style={{width: (width - 180)}}>
                        <Text style={styles.name}>Personaje:</Text>
                        <Text style={styles.character}>{character}</Text>
                        {
                            !isLoading && (
                                <>
                                    {
                                        details?.deathday && (
                                            <Text style={{color: themeColors.white}}>
                                                <Text>Muerte: </Text>
                                                <Text>{details?.deathday}</Text>
                                            </Text>
                                        )
                                    }
                                    <Text style={{color: '#ccc'}}>Nacimiento: </Text>
                                    <Text style={{color: '#fff'}}>{details?.birthday} (51 años), {details?.place_of_birth}</Text>
                                </>
                            )
                        }
                    </View>
                </View>
                {
                    isLoading ? <Spinner /> : (
                        <>                                
                            <View style={{
                                paddingHorizontal: 20, 
                            }}>
                                <Text style={styles.title}>Biografía</Text>
                                <Text style={{color: themeColors.white}}>{(
                                    details?.biography && sliceText) ? 
                                    details?.biography.slice(0, 400) + '...': 
                                    details?.biography}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setSliceText(!sliceText)}>
                            <Text style={{color: themeColors.white, textAlign: 'right', paddingRight: 20, marginBottom: 15}}>Leer más</Text>
                            </TouchableOpacity>
                            <View style={{paddingHorizontal: 10, marginBottom: 15}}>
                                <Text style={{
                                    ...styles.title, 
                                    marginLeft: 10, 
                                    marginBottom: 15
                                }}>Películas populares</Text>
                                <HorizontalSlider movies={movies} />
                            </View>
                        </>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const size = 120

const styles = StyleSheet.create({
    header: {
        ...globalStyles.row, 
        alignItems: 'center',
        marginBottom: 5,
        padding: 20
    },
    avatar: {
        width: size,
        height: size,
        borderRadius: 100,
        marginRight: 20
    },
    name: {
        fontSize: 14,
        color: '#ccc',
    },
    character: {
        color: themeColors.white,
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 15
    },
    title: {
        color: themeColors.white, 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 10
    }
})