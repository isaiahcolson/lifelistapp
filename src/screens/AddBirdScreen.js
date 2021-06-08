import React, {useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import {useAuth} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';
import FormInput from '../components/FormComponents/FormInput';
import theme from '../styles/theme.style';
import styles from '../styles/styles';
import FormStyles from '../styles/FormStyles';

const AddBirdScreen = ({navigation}) => {
  const {updateUser} = useAuth();
  const [newBird, setNewBird] = useState('');

  const birdData = {
    birdName: newBird,
    dateAdded: Date(Date.now()),
  };

  const data = {
    'birdData.lifeList': firestore.FieldValue.arrayUnion(birdData),
  };

  const clearInput = () => {
    setNewBird('');
  };

  return (
    <View style={[styles.standardScreen, FormStyles.formScreen]}>
      <View>
        <Text style={[styles.header2Bold, {marginBottom: theme.spacing_6}]}>
          Edit Profile
        </Text>

        <Text style={FormStyles.inputLabel}>Bird Name</Text>
        <FormInput
          autoCapitalize="words"
          value={newBird}
          maxLength={64}
          style={[FormStyles.fullWidthInput, {marginBottom: theme.spacing_2}]}
          onChangeText={addedBird => {
            setNewBird(addedBird);
            return;
          }}
        />
      </View>

      <View style={FormStyles.buttonGroup}>
        <FormButton
          buttonStyle={FormStyles.ghostButton}
          buttonTitle="Cancel"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />

        <FormButton
          buttonStyle={FormStyles.filledButton}
          buttonTitle="Add"
          onPress={() => {
            updateUser(data);
            clearInput();
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

export default AddBirdScreen;
