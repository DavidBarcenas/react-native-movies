import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setImageColors: (colors: ImageColors) => void;
    setPrevImageColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps)

export const GradientProvider = ({children}: any) => {
    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const [colors, setColors] = useState<ImageColors>({
        primary: 'red',
        secondary: 'blue'
    })

    const setImageColors = (colors: ImageColors) => {
        setColors(colors)
    }

    const setPrevImageColors = (colors: ImageColors) => {
        setPrevColors(colors)
    }

    return (
        <GradientContext.Provider value={{
            colors, 
            prevColors, 
            setImageColors, 
            setPrevImageColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}