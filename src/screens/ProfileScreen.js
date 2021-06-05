import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useAuth} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';

const ProfileScreen = ({navigation}) => {
  const {user, logout} = useAuth();
  const [favoriteBird, setFavoriteBird] = useState();

  firestore()
    .collection('users')
    .doc(user.uid)
    .onSnapshot(doc => {
      setFavoriteBird(doc.data().birdData.favoriteBird);
    });

  return (
    <View>
      <Text>{user.displayName ? user.displayName : ''}</Text>
      <Text>{user.email ? user.email : ''}</Text>
      <Text>Favorite bird: {favoriteBird ? favoriteBird : 'Not set'}</Text>
      <Pressable onPress={() => navigation.push('Edit Profile')}>
        <Text>Edit Profile</Text>
      </Pressable>
      <FormButton buttonTitle="Log out" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
