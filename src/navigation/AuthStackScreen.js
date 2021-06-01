import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import {GOOGLE_TOKEN} from '@env';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: `${GOOGLE_TOKEN}`,
    });
  });

  return (
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
};

export default AuthStackScreen;
