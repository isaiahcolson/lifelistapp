import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Sign In"
      component={SigninScreen}
      options={{headerShown: false}}
    />
    <AuthStack.Screen
      name="Sign Up"
      component={SignupScreen}
      options={{title: ''}}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
