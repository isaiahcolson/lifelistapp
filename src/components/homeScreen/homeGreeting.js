import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import styles from '../../styles/styles';
import {AuthContext} from '../../navigation/AuthProvider';

const HomeGreeting = props => {
  const {user} = useContext(AuthContext);

  const displayFirstName = givenUser => {
    if (givenUser.displayName !== null) {
      const bothNames = givenUser.displayName.split(' ');
      return bothNames[0];
    } else {
      return 'Birder';
    }
  };

  return (
    <View>
      <Text style={styles.mediumHeaderBold}>
        Hi {displayFirstName(user)}, 👋
      </Text>
      <Text style={styles.mediumHeaderRegular}>here's your Life List</Text>
    </View>
  );
};

export default HomeGreeting;
