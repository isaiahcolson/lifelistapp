import React from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from '../../styles/styles';
import theme from '../../styles/theme.style';

const LifeListCount = props => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.centeredComponent}
      onPress={() => navigation.push('Life List')}>
      <Text style={styles.largeHeaderBold}>{props.count}</Text>
      <Text style={theme.font_size_2}>
        Your cumulative record of bird species
      </Text>
      <Text style={theme.font_size_2}>
        that you've successfully identified.
      </Text>
    </Pressable>
  );
};

export default LifeListCount;
