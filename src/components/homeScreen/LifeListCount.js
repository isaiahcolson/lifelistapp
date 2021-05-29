import React from 'react';
import {Text, View} from 'react-native';

import styles from '../../styles/styles';
import theme from '../../styles/theme.style';

const LifeListCount = props => {
  return (
    <View style={styles.centeredComponent}>
      <Text style={styles.largeHeaderBold}>{props.count}</Text>
      <Text style={theme.font_size_2}>
        Your cumulative record of bird species
      </Text>
      <Text style={theme.font_size_2}>
        that you've successfully identified.
      </Text>
    </View>
  );
};

export default LifeListCount;
