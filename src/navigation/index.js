import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeBottomNavigator from './bottomTabNavigator';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeBottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
