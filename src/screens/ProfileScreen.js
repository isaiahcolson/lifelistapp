import React from 'react';
import {Text, View} from 'react-native';
import packageJson from '../../package.json';

import {useAuth} from '../navigation/AuthProvider';
import FormButton from '../components/FormComponents/FormButton';
import RightIconButton from '../components/FormComponents/RightIconButton';
import iconList from '../../assets/iconList';
import theme from '../styles/theme.style';
import styles from '../styles/styles';
import FormStyles from '../styles/FormStyles';

const ProfileScreen = ({navigation}) => {
  const {user, userData, logout} = useAuth();

  const displayJoinedDate = () => {
    if (user?.metadata?.creationTime) {
      const userDate = Date(user.metadata.creationTime).split(' ');
      const month = userDate[1];
      const year = userDate[3];
      return `${month}, ${year}`;
    } else {
      return '';
    }
  };

  const recentBirds = () => {
    if (userData?.birdData?.lifeList?.length) {
      return userData.birdData.lifeList
        .slice(Math.max(userData.birdData.lifeList.length - 5, 1))
        .reverse();
    }
  };

  const birdIndex = mapIndex => {
    if (userData?.birdData?.lifeList?.length) {
      const lifeListCount = userData.birdData.lifeList.length;
      return lifeListCount - mapIndex;
    }
  };

  const displayRecent = recentBirds().map(bird => (
    <View key={recentBirds().indexOf(bird)} style={{flexDirection: theme.row}}>
      <Text>{birdIndex(recentBirds().indexOf(bird))}. </Text>
      <Text>{bird.birdName}</Text>
    </View>
  ));

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
        <Text>
          Favorite bird:{' '}
          {userData?.birdData?.favoriteBird
            ? userData.birdData.favoriteBird
            : 'Not set'}
        </Text>
        {/* TODO: set birder levels */}
        <Text>Novice Birder</Text>
      </View>

      <View style={{marginBottom: theme.spacing_6}}>
        <Text style={[styles.header3Bold, {marginBottom: theme.spacing_half}]}>
          Birds
        </Text>
        <View>{displayRecent}</View>
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
