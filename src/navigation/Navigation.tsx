import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { ActorScreen } from '../screens/ActorScreen';
import { Movie } from '../interfaces/movieInterface';
import { themeColors } from '../theme/global';
import { Cast } from '../interfaces/creditsInterface';

export type RootStackParams = {
  HomeNested: undefined;
  Actor: Cast;
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
      <Stack.Screen 
        name="Actor" 
        options={({ route }) => ({ 
          title: route.params.name,
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: themeColors.dominant
          },
        })}
        component={ActorScreen} 
      />
    </Stack.Navigator>
  );
}