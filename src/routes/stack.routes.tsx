import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {Welcome} from '../screens/Welcome';
import {Login} from '../screens/Login';
import {Confirmation} from '../screens/Confirmation';

import AuthRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Confirmation" component={Confirmation} />

      <Stack.Screen name="Home" component={AuthRoutes} />

      <Stack.Screen name="MyPlants" component={AuthRoutes} />
    </Stack.Navigator>
  );
}
