import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useAuth} from './AuthProvider';
import DeviceNotch from '../components/DeviceNotch';
import TabBar from './TabBar';
import AuthStackScreen from './AuthStackScreen';

const Routes = () => {
  const {user} = useAuth();

  return (
    <>
      <DeviceNotch barStyle="dark-content" />

      <NavigationContainer>
        {user ? <TabBar /> : <AuthStackScreen />}
      </NavigationContainer>
    </>
  );
};

export default Routes;
