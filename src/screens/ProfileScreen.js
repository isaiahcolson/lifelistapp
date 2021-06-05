import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {useAuth} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';

const ProfileScreen = ({navigation}) => {
  const {user, logout} = useAuth();

  return (
    <View>
      <Text>{user.displayName ? user.displayName : ''}</Text>
      <Pressable onPress={() => navigation.push('Edit Profile')}>
        <Text>Edit Profile</Text>
      </Pressable>
      <FormButton buttonTitle="Log out" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
