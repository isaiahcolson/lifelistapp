import React, {useState} from 'react';
// import firestore from '@react-native-firebase/firestore';
import {Text, View} from 'react-native';

import {useAuth} from '../navigation/AuthProvider';
import FormInput from '../components/FormComponents/FormInput';
import FormButton from '../components/FormComponents/FormButton';
import FormStyles from '../styles/FormStyles';

// TODO adding firestore
// const usersCollection = firestore()
//   .collection('users')
//   .doc('0gCM4BkWZLCkLt01OPOr')
//   .get()
//   .then(documentSnapshot => {
//     console.log('User data: ', documentSnapshot.data());
//   });

const EditProfileScreen = ({navigation}) => {
  const [displayName, setDisplayName] = useState('');
  const {user, updateUser} = useAuth();

  return (
    <View>
      <Text>Edit profile screen.</Text>
      <Text>{user.displayName ? user.displayName : ''}</Text>

      <View style={FormStyles.formGroup}>
        <Text style={FormStyles.inputLabel}>Email</Text>
        <FormInput
          maxLength={64}
          style={FormStyles.fullWidthInput}
          onChangeText={userDisplayName => {
            setDisplayName(userDisplayName);
          }}
        />
        <FormButton
          buttonStyle={FormStyles.fullWidthButton}
          buttonTitle="Update"
          onPress={() => {
            updateUser({displayName: displayName});
            navigation.navigate('Profile');
          }}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
