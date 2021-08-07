import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/Navigation';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons';
import { themeColors } from '../../theme/colors';

interface BackDropProps {
    navigation: StackNavigationProp<RootStackParams, "Detail">
    imagePath:  string,
    height:     number
}

export const Backdrop = ({navigation, imagePath, height}: BackDropProps) => {
    return (
        <View style={{...styles.backdrop, height: height * 0.25}}>
            <Image 
                source={{uri: imagePath}} 
                style={styles.image} 
            />
            <LinearGradient  
                colors={["transparent", "#000"]} 
                locations={[0.4, 1.2]} 
                style={styles.linearGradient} 
            />
            <TouchableOpacity 
                onPress={() => navigation.goBack()}  
                style={styles.backBtn}>
                <Icon 
                    name="chevron-back-outline" 
                    size={30} 
                    color={themeColors.white} 
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    linearGradient: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    backBtn: {
        position: 'absolute', 
        top: 10, 
        left: 10
    }
})