import React, { createContext, useState } from 'react';
import { ContextProps, GradientProviderProps, ImageColors } from '../interfaces/gradientInterface';

const defaultColors: ImageColors = {
    primary:   'transparent',
    secondary: 'transparent'
}

export const GradientContext = createContext({} as ContextProps)

export const GradientProvider = ({children}: GradientProviderProps) => {
    const [nextColors, setNextColors] = useState<ImageColors>(defaultColors)
    const [colors, setColors] = useState<ImageColors>(defaultColors)

    return (
        <GradientContext.Provider value={{
            colors,
            setColors,
            nextColors,
            setNextColors,
        }}>
            {children}
        </GradientContext.Provider>
    )
}