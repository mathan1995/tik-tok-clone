import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/Entypo';
import Ant from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import plusIcon from '../assets/icons/plus-icon.png';

const Tab = createBottomTabNavigator();

const bottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ant name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={plusIcon}
              style={{height: 30, resizeMode: 'contain'}}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Material name="message-minus-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Ionic name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default bottomTabNavigator;
