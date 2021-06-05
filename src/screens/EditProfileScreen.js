import React, {useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useAuth} from '../navigation/AuthProvider';
import FormInput from '../components/FormComponents/FormInput';
import FormButton from '../components/FormComponents/FormButton';
import FormStyles from '../styles/FormStyles';

const EditProfileScreen = ({navigation}) => {
  const {user, updateUser} = useAuth();
  const [displayName, setDisplayName] = useState(user.displayName);
  const [currentFavorite, setCurrentFavorite] = useState();
  const [favoriteBird, setFavoriteBird] = useState(currentFavorite);

  firestore()
    .collection('users')
    .doc(user.uid)
    .onSnapshot(doc => {
      setCurrentFavorite(doc.data().birdData.favoriteBird);
    });

  const data = {
    displayName: displayName,
    'birdData.favoriteBird': favoriteBird,
  };

  return (
    <View>
      <Text>Edit profile screen.</Text>
      <Text>{user.displayName ? user.displayName : ''}</Text>

      <View style={FormStyles.formGroup}>
        <Text style={FormStyles.inputLabel}>Full Name</Text>
        <FormInput
          maxLength={64}
          defaultValue={user.displayName}
          style={FormStyles.fullWidthInput}
          onChangeText={userDisplayName => {
            setDisplayName(userDisplayName);
          }}
        />

        <Text style={FormStyles.inputLabel}>Favorite Bird</Text>
        <FormInput
          maxLength={64}
          defaultValue={currentFavorite}
          style={FormStyles.fullWidthInput}
          onChangeText={userFavoriteBird => {
            setFavoriteBird(userFavoriteBird);
          }}
        />

        <FormButton
          buttonStyle={FormStyles.fullWidthButton}
          buttonTitle="Update"
          onPress={() => {
            updateUser(data);
            navigation.navigate('Profile');
          }}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
