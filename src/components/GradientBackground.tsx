import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({children}: Props) => {
    const {colors} = useContext(GradientContext)
    const {primary, secondary} = colors

    return (
        <View style={{flex: 1}}>
            <LinearGradient 
                colors={[primary, secondary, '#fff']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y: 0.1}}
                end={{x:0.1, y: 1}}
            />
            {children}
        </View>
    )
}
