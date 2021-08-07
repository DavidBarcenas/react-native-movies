import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import { globalStyles, themeColors } from '../../theme/global';
import { Genre } from '../../interfaces/detailInterface'
import { getTime } from '../../helpers/utils';

interface HeaderProps {
    runtime:      number | undefined;
    genres:       Genre[] | undefined;
    vote_average: number;
    imagePath:    string;
    width:        number;
    title:        string;
}

export const Header = ({
    vote_average,
    imagePath,
    width,
    title,
    runtime,
    genres,
}: HeaderProps) => {
    return (
        <View style={[globalStyles.row, styles.header]}>
            <Image source={{uri: imagePath}} style={styles.poster} />
            <View style={{width: (width - 195), marginTop: 10, marginLeft: 155}}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.voteWrapper}>
                    <View style={styles.voteItem}>
                        <Icon name="star" size={20} color={themeColors.yellow} />
                        <Text style={styles.iconText}>{vote_average}</Text>
                    </View>
                    {
                        runtime && (
                            <View style={{...styles.voteItem, marginLeft: 20}}>
                                <Icon name="time-outline" size={20} color={themeColors.green} />
                                <Text style={styles.iconText}>{getTime(runtime)}</Text>
                            </View>
                        )
                    }
                </View>
                <View style={globalStyles.row}>
                    {
                        genres?.map(item => (
                            <Text key={item.id} style={styles.budget}>
                                {item.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexWrap: 'nowrap',
        marginBottom: 25,
        minHeight: 120,
    },
    poster: {
        width: 140,
        height: 200,
        top: -80,
        position: 'absolute'
    },
    title: {
        color: themeColors.white,
        fontWeight: 'bold', 
        fontSize: 16,
        textTransform: 'uppercase',
        marginBottom: 5
    },
    iconText: {
        color: '#ccc',
        fontWeight: 'bold',
        marginLeft: 5
    },
    budget: {
        backgroundColor: '#333',
        color: '#ccc',
        fontSize: 12,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginRight: 5,
        marginBottom: 5
    },
    voteWrapper: {
        ...globalStyles.row, 
        marginBottom: 12
    },
    voteItem: {
        ...globalStyles.row, 
        alignItems: 'center'
    }
})