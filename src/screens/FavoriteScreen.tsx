import React from 'react'
import { Text, View } from 'react-native';
import { globalStyles, themeColors } from '../theme/global';
import Icon from 'react-native-vector-icons/Ionicons';

export const FavoriteScreen = () => {
    return (
        <View style={globalStyles.screen}>
            <Icon name='bookmark' size={30} color={themeColors.yellow} />
            <Text style={globalStyles.screenTitle}>Favorites</Text>
        </View>
    )
}
