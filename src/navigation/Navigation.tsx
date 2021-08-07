import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
import { colors } from '../theme/colors';

export type RootStackParams = {
  Home:   undefined;
  Detail: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.dominant,
      }
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}