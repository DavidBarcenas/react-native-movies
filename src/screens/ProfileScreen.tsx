import React from 'react'
import { Text, View } from 'react-native';
import { globalStyles, themeColors } from '../theme/global';
import Icon from 'react-native-vector-icons/Ionicons';

export const ProfileScreen = () => {
    return (
        <View style={globalStyles.screen}>
            <Icon name='person' size={30} color={themeColors.yellow} />
            <Text style={globalStyles.screenTitle}>Profile</Text>
        </View>
    )
}
