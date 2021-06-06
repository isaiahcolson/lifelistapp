import React from 'react';
import {View} from 'react-native';

import theme from '../styles/theme.style';
import HomeGreeting from '../components/homeScreen/homeGreeting';
import LifeListCount from '../components/homeScreen/LifeListCount';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: theme.flex_one,
        backgroundColor: theme.blue_jay_white,
        padding: theme.spacing_5,
      }}>
      <HomeGreeting name="Kenny" />
      <LifeListCount count="51" />
    </View>
  );
};

export default HomeScreen;
