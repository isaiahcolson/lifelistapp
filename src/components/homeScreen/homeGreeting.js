import React from 'react';
import {Text, View} from 'react-native';

import {useAuth} from '../../navigation/AuthProvider';
import styles from '../../styles/styles';

const HomeGreeting = () => {
  const {user} = useAuth();

  const displayFirstName = givenUser => {
    if (givenUser.displayName !== null) {
      const splitNames = givenUser.displayName.split(' ');
      return splitNames[0];
    } else {
      return 'Birder';
    }
  };

  return (
    <View>
      <Text style={styles.header2Bold}>Hi {displayFirstName(user)}, 👋</Text>
      <Text style={styles.header2Regular}>here's your Life List</Text>
    </View>
  );
};

export default HomeGreeting;
