import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';

import theme from '../styles/theme.style';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const tabs = createBottomTabNavigator();

const TabBar = () => (
  <tabs.Navigator tabBarOptions={{showLabel: false}}>
    <tabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../../assets/icons/icon-home.png')}
              resizeMode="contain"
              style={{
                width: theme.font_size_6,
                height: theme.font_size_6,
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
      component={Profile}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('../../assets/icons/icon-profile.png')}
              resizeMode="contain"
              style={{
                width: theme.font_size_6,
                height: theme.font_size_6,
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
