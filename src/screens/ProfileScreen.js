import React, {useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import packageJson from '../../package.json';

import {useAuth} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';
import RightIconButton from '../components/FormComponents/RightIconButton';
import iconList from '../../assets/iconList';
import theme from '../styles/theme.style';
import styles from '../styles/styles';
import FormStyles from '../styles/FormStyles';

const ProfileScreen = ({navigation}) => {
  const {user, logout} = useAuth();
  const [favoriteBird, setFavoriteBird] = useState();

  firestore()
    .collection('users')
    .doc(user.uid)
    .onSnapshot(doc => {
      setFavoriteBird(doc.data().birdData.favoriteBird);
    });

  const displayJoinedDate = () => {
    if (user.metadata.creationTime) {
      const userDate = Date(user.metadata.creationTime).split(' ');
      const month = userDate[1];
      const year = userDate[3];
      return `${month}, ${year}`;
    } else {
      return '';
    }
  };

  return (
    <View style={styles.standardScreen}>
      <Text style={[styles.header2Bold, {marginBottom: theme.spacing_6}]}>
        Profile
      </Text>

      <View style={{marginBottom: theme.spacing_2}}>
        <Text style={styles.header2Regular}>
          {user.displayName ? user.displayName : ''}
        </Text>
        <Text>{user.email ? user.email : ''}</Text>
      </View>

      <FormButton
        buttonTitle="Edit Profile"
        onPress={() => navigation.push('Edit Profile')}
        buttonStyle={FormStyles.inlineButton}
        style={{marginBottom: theme.spacing_3}}
      />

      <View style={{marginBottom: theme.spacing_3}}>
        <Text style={[styles.header3Bold, {marginBottom: theme.spacing_half}]}>
          Account
        </Text>
        <Text>Joined {displayJoinedDate()}</Text>
        <Text>Favorite bird: {favoriteBird ? favoriteBird : 'Not set'}</Text>
        {/* TODO: set birder levels */}
        <Text>Novice Birder</Text>
      </View>

      <View style={{marginBottom: theme.spacing_6}}>
        <Text style={[styles.header3Bold, {marginBottom: theme.spacing_half}]}>
          Birds
        </Text>
        {/* TODO: add recentBirds component below */}
        <Text>No birds added yet.</Text>
        <RightIconButton
          buttonTitle="View Full Life List"
          onPress={() => navigation.push('Life List')}
          buttonIcon={iconList.rightChevron}
        />
      </View>

      <FormButton
        buttonTitle="Log out"
        onPress={logout}
        buttonStyle={FormStyles.inlineButton}
        style={{marginBottom: theme.spacing_2}}
      />

      <Text>v{packageJson.version}</Text>
    </View>
  );
};

export default ProfileScreen;
