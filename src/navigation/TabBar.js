import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, Pressable, View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import AddBirdScreen from '../screens/AddBirdScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import LifeListScreen from '../screens/LifeListScreen';
import iconList from '../../assets/iconList';
import theme from '../styles/theme.style';

const tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: theme.center,
      alignItems: theme.center,
      top: -theme.spacing_2,
    }}>
    <View
      style={{
        height: theme.spacing_6,
        width: theme.spacing_6,
        borderRadius: theme.spacing_3,
        backgroundColor: theme.blue_jay_blue,
      }}>
      {children}
    </View>
  </Pressable>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <HomeStack.Screen
      name="Life List"
      component={LifeListScreen}
      options={{title: ''}}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{headerShown: false}}
    />
    <ProfileStack.Screen
      name="Edit Profile"
      component={EditProfileScreen}
      options={{title: ''}}
    />
    <ProfileStack.Screen
      name="Life List"
      component={LifeListScreen}
      options={{title: ''}}
    />
  </ProfileStack.Navigator>
);

const TabBar = () => (
  <tabs.Navigator tabBarOptions={{showLabel: false, style: {height: 60}}}>
    <tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={iconList.home}
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
      name="Add Bird"
      component={AddBirdScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={iconList.plus}
            resizeMode="contain"
            style={{
              width: theme.font_size_9,
              height: theme.font_size_9,
              tintColor: theme.blue_jay_white,
            }}
          />
        ),
        tabBarButton: props => <CustomTabBarButton {...props} />,
      }}
    />

    <tabs.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={iconList.profile}
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
