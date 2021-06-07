import React, {useState} from 'react';
import {View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useAuth} from '../navigation/AuthProvider';
import theme from '../styles/theme.style';
import HomeGreeting from '../components/homeScreen/homeGreeting';
import LifeListCount from '../components/homeScreen/LifeListCount';

const HomeScreen = () => {
  const {user} = useAuth();
  const [lifeListCount, setLifeListCount] = useState();

  firestore()
    .collection('users')
    .doc(user.uid)
    .onSnapshot(doc => {
      setLifeListCount(doc.data().birdData.lifeList.length);
    });

  return (
    <View
      style={{
        flex: theme.flex_one,
        backgroundColor: theme.blue_jay_white,
        padding: theme.spacing_5,
      }}>
      <HomeGreeting name="Kenny" />
      <LifeListCount count={lifeListCount} />
    </View>
  );
};

export default HomeScreen;
