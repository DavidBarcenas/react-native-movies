export interface ImageColors {
    primary: string;
    secondary: string;
}

export interface ContextProps {
    colors: ImageColors;
    nextColors: ImageColors;
    setColors: React.Dispatch<React.SetStateAction<ImageColors>>;
    setNextColors: React.Dispatch<React.SetStateAction<ImageColors>>;
}

export interface GradientProviderProps {
    children: JSX.Element | JSX.Element[]
}