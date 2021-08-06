import ImageColors from 'react-native-image-colors'

export const getImageColors = async (uri: string) => {
    const colors = await ImageColors.getColors(uri, {
        fallback: '#228B22'
    })

    let primary, secondary, tertiary;

    if (colors.platform === 'android') {
        primary   = colors.dominant
        secondary = colors.average
        secondary = colors.lightVibrant
    } else {
        primary   = colors.primary
        secondary = colors.secondary
        secondary = colors.quality
    }

    return [primary, secondary, tertiary]
}