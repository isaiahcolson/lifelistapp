import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useAuth} from '../navigation/AuthProvider';
import theme from '../styles/theme.style';
import styles from '../styles/styles';

const LifeListScreen = () => {
  const {user} = useAuth();
  const [birdList, setBirdList] = useState([]);

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        setBirdList(doc.data().birdData.lifeList.reverse());
      });
  });

  const displayBird = birdList.map(bird => (
    <Text key={birdList.indexOf(bird)}>{bird.birdName}</Text>
  ));

  return (
    <View style={styles.standardScreen}>
      <Text style={[styles.header2Bold, {marginBottom: theme.spacing_6}]}>
        Life List Screen
      </Text>
      <View>{displayBird}</View>
    </View>
  );
};

export default LifeListScreen;
