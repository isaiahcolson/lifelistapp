import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Notch from './src/components/DeviceNotch';
import TabBar from './src/components/TabBar';

const LifeListApp = () => {
  return (
    <NavigationContainer>
      <Notch barStyle="dark-content" />
      <TabBar />
    </NavigationContainer>
  );
};

export default LifeListApp;
