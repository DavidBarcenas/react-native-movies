import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({children}: Props) => {
    const {prevColors, colors, setPrevImageColors} = useContext(GradientContext)
    const {opacity, fadeIn, fadeOut} = useFade()

    useEffect(() => {
        fadeIn(() => {
            setPrevImageColors(colors)
            fadeOut()
        })
    }, [colors])

    return (
        <View style={{flex: 1}}>
            <LinearGradient 
                colors={[prevColors.primary, prevColors.secondary, '#fff']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y: 0.1}}
                end={{x:0.1, y: 1}}
            />
            <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
                <LinearGradient 
                    colors={[colors.primary, colors.secondary, '#fff']}
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{x:0.1, y: 0.1}}
                    end={{x:0.1, y: 1}}
                />
            </Animated.View>
            {children}
        </View>
    )
}
