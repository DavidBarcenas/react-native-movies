import 'react-native-gesture-handler';
import React from 'react'
import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { GradientProvider } from './src/context/GradientContext';
import { TabNavigator } from './src/navigation/TabNavigator';
import { themeColors } from './src/theme/global';

const navTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: themeColors.dominant,
    text: themeColors.white,
  }
}

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <GradientProvider>
        <TabNavigator />  
      </GradientProvider>
    </NavigationContainer>
  )
}

export default App