import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Navigation } from './Navigation';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { themeColors } from '../theme/global';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator 
        barStyle={{backgroundColor: themeColors.dominant}}
        activeColor={themeColors.white}
        sceneAnimationEnabled={true}
        initialRouteName="Home"
        labeled={false}
        shifting={false}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
                let iconName;

                switch (route.name) {
                    case 'Search':
                        iconName = 'search'
                        break;

                    case 'Favorites':
                        iconName = 'bookmark'
                        break;

                    case 'Profile':
                        iconName = 'person'
                        break;
                
                    default:
                        iconName = 'home'
                        break;
                }
                let icon = focused ? iconName : iconName + '-outline'
                return <Icon name={icon} size={20} color={themeColors.yellow} />
            }
        })}
    >
        <Tab.Screen name="Home" component={Navigation} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Favorites" component={FavoriteScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}