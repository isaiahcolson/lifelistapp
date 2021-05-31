import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {AuthContext} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';

const ProfileScreen = () => {
  const {logout} = useContext(AuthContext);

  return (
    <View>
      <Text>Profile screen</Text>
      <FormButton buttonTitle="Log out" onPress={() => logout()} />
    </View>
  );
};

export default ProfileScreen;
