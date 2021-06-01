import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';

import theme from '../styles/theme.style';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const tabs = createBottomTabNavigator();

const TabBar = () => (
  <tabs.Navigator tabBarOptions={{showLabel: false, style: {height: 60}}}>
    <tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../../assets/icons/icon-home.png')}
              resizeMode="contain"
              style={{
                width: theme.font_size_7,
                height: theme.font_size_7,
                tintColor: focused
                  ? theme.blue_jay_black
                  : theme.blue_jay_gray_2,
              }}
            />
          </View>
        ),
      }}
    />
    <tabs.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../../assets/icons/icon-profile.png')}
              resizeMode="contain"
              style={{
                width: theme.font_size_7,
                height: theme.font_size_7,
                tintColor: focused
                  ? theme.blue_jay_black
                  : theme.blue_jay_gray_2,
              }}
            />
          </View>
        ),
      }}
    />
  </tabs.Navigator>
);

export default TabBar;