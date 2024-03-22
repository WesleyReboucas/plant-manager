import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import colors from '../components/styles/colors';
import {Home} from '../screens/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {MyPlants} from '../screens/MyPlants';

export interface TabBarIconProps {
  size: number;
  color: string;
}

const AppTab = createBottomTabNavigator();

export default function AuthRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          paddingTop: Platform.OS === 'ios' ? 10 : 0,
          paddingBottom: Platform.OS === 'ios' ? 10 : 0,
          height: 60,
        },
      }}>
      <AppTab.Screen
        name="Nova Planta"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}: TabBarIconProps) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}: TabBarIconProps) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}
