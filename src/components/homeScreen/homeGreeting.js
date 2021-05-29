import React from 'react';
import {Text, View} from 'react-native';

import styles from '../../styles/styles';

const HomeGreeting = props => {
  return (
    <View>
      <Text style={styles.mediumHeaderBold}>Hi {props.name}, 👋</Text>
      <Text style={styles.mediumHeaderRegular}>here's your Life List</Text>
    </View>
  );
};

export default HomeGreeting;
