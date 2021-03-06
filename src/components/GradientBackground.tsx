import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';
import { themeColors } from '../theme/global';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({children}: Props) => {
    const {nextColors, colors, setNextColors} = useContext(GradientContext)
    const {opacity, fadeIn, fadeOut} = useFade()

    useEffect(() => {
        fadeIn(() => {
            setNextColors(colors)
            fadeOut()
        })
    }, [colors])

    return (
        <View style={{flex: 1}}>
            <LinearGradient 
                colors={[nextColors.primary, nextColors.secondary, themeColors.dominant]}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x:0.1, y: 0.1}}
                end={{x:0.1, y: 1}}
            />
            <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
                <LinearGradient 
                    colors={[colors.primary, colors.secondary, themeColors.dominant]}
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{x:0.1, y: 0.1}}
                    end={{x:0.1, y: 1}}
                />
            </Animated.View>
            {children}
        </View>
    )
}
