import React from 'react';
import {Text, View} from 'react-native';

import {useAuth} from '../navigation/AuthProvider';
import theme from '../styles/theme.style';
import styles from '../styles/styles';

const LifeListScreen = () => {
  const {userData} = useAuth();

  const retrievedList = () => {
    if (userData?.birdData?.lifeList?.length) {
      const list = userData.birdData.lifeList;
      return list;
    } else {
      return '';
    }
  };

  const displayBird = retrievedList().map(bird => (
    <Text key={retrievedList().indexOf(bird)}>{bird.birdName}</Text>
  ));

  return (
    <View style={styles.standardScreen}>
      <Text style={[styles.header2Bold, {marginBottom: theme.spacing_6}]}>
        Life List Screen
      </Text>
      <View>{displayBird.reverse()}</View>
    </View>
  );
};

export default LifeListScreen;
