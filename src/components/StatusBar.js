import React from 'react';
import {StatusBar, View} from 'react-native';
import statusBarStyles from '../styles/StatusBarStyles';

const StatusBarColor = ({backgroundColor, ...props}) => (
  <View style={[statusBarStyles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default StatusBarColor;
