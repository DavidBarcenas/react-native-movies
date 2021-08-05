import React from 'react'
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const DetailScreen = ({route, navigation}: Props) => {
    const movie = route.params

    return (
        <View>
            <Text>DetailScreen</Text>
            <Button title="regresar" onPress={() => navigation.goBack()} />
        </View>
    )
}
