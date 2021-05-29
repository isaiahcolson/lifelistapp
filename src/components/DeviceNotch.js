import React from 'react';
import {StatusBar, View} from 'react-native';

import theme from '../styles/theme.style';
import statusBarStyles from '../styles/StatusBarStyles';

const Notch = ({...props}) => (
  <View style={statusBarStyles.statusBar}>
    <StatusBar translucent backgroundColor={theme.blue_jay_white} {...props} />
  </View>
);

export default Notch;
