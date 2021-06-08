import React from 'react';
import {View} from 'react-native';

import {useAuth} from '../navigation/AuthProvider';
import theme from '../styles/theme.style';
import HomeGreeting from '../components/homeScreen/homeGreeting';
import LifeListCount from '../components/homeScreen/LifeListCount';

const HomeScreen = ({navigation}) => {
  const {userData} = useAuth();

  const listCount = () => {
    if (userData?.birdData?.lifeList?.length) {
      return userData.birdData.lifeList.length;
    } else {
      return 0;
    }
  };

  return (
    <View
      style={{
        flex: theme.flex_one,
        backgroundColor: theme.blue_jay_white,
        padding: theme.spacing_5,
      }}>
      <HomeGreeting name="Kenny" />
      <LifeListCount count={listCount()} />
    </View>
  );
};

export default HomeScreen;
