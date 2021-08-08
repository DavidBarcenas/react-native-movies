import React from 'react'
import { View, Text } from 'react-native';
import { globalStyles, themeColors } from '../theme/global';
import Icon from 'react-native-vector-icons/Ionicons';

export const SearchScreen = () => {
    return (
        <View style={globalStyles.screen}>
            <Icon name='search' size={30} color={themeColors.yellow} />
            <Text style={globalStyles.screenTitle}>Search</Text>
        </View>
    )
}
