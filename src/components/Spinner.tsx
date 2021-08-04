import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const Spinner = () => {
    return (
        <View style={styles.spinner}>
            <ActivityIndicator color="purple" size={40} />
        </View>
    )
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})