import { StyleSheet } from "react-native"

export const themeColors = {
    dominant: '#282628',
    average:  '#ffffff',
    white:    '#fff',
    yellow:   '#ffc145',
    green:    '#77c8b2',
}

export const globalStyles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    screen : {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    screenTitle: {
        color: '#777',
        fontSize: 30
    }
})