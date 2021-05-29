import React from 'react';
import {View} from 'react-native';

import theme from '../styles/theme.style';
import HomeGreeting from '../components/homeScreen/homeGreeting';

const Home = () => (
  <View style={{flex: theme.flex_one, backgroundColor: theme.blue_jay_white}}>
    <HomeGreeting name="Kenny" />
  </View>
);

export default Home;
