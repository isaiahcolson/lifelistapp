import React, {useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useAuth} from '../navigation/AuthProvider';
import FormInput from '../components/FormComponents/FormInput';
import FormButton from '../components/FormComponents/FormButton';
import theme from '../styles/theme.style';
import styles from '../styles/styles';
import FormStyles from '../styles/FormStyles';

const EditProfileScreen = ({navigation}) => {
  const {user, updateUser} = useAuth();
  const [displayName, setDisplayName] = useState(user.displayName);
  const [currentFavorite, setCurrentFavorite] = useState();
  const [favoriteBird, setFavoriteBird] = useState(currentFavorite);

  firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then(doc => {
      setCurrentFavorite(doc.data().birdData.favoriteBird);
    });

  const data = {
    displayName: displayName,
    'birdData.favoriteBird': favoriteBird,
  };

  // TODO: logging favoriteBird is undefined until a value is entered

  return (
    <View style={[styles.standardScreen, FormStyles.formScreen]}>
      <View>
        <Text style={[styles.header2Bold, {marginBottom: theme.spacing_6}]}>
          Edit Profile
        </Text>

        <Text style={FormStyles.inputLabel}>Full Name</Text>
        <FormInput
          maxLength={64}
          defaultValue={user.displayName}
          style={[FormStyles.fullWidthInput, {marginBottom: theme.spacing_2}]}
          onChangeText={userDisplayName => {
            setDisplayName(userDisplayName);
            return;
          }}
        />

        <Text style={FormStyles.inputLabel}>Favorite Bird</Text>
        <FormInput
          maxLength={64}
          defaultValue={currentFavorite}
          style={[FormStyles.fullWidthInput, {marginBottom: theme.spacing_2}]}
          onChangeText={userFavoriteBird => {
            setFavoriteBird(userFavoriteBird);
          }}
        />
      </View>

      <View style={FormStyles.buttonGroup}>
        <FormButton
          buttonStyle={FormStyles.ghostButton}
          buttonTitle="Cancel"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />

        <FormButton
          buttonStyle={FormStyles.fullWidthButton}
          buttonTitle="Save"
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
