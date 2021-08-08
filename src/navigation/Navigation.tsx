import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { ActorScreen } from '../screens/ActorScreen';
import { Movie } from '../interfaces/movieInterface';
import { themeColors } from '../theme/global';

export type RootStackParams = {
  HomeNested: undefined;
  Actor: undefined;
  Detail: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: themeColors.dominant,
      }
    }}>
      <Stack.Screen name="HomeNested" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Actor" component={ActorScreen} />
    </Stack.Navigator>
  );
}