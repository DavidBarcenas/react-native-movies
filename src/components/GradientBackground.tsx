import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({children}: Props) => {
    return (
        <View style={{flex: 1}}>
            <LinearGradient 
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y: 0.1}}
                end={{x:0.5, y: 0.5}}
            />
            {children}
        </View>
    )
}
