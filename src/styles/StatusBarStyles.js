import {StatusBar, StyleSheet} from 'react-native';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const statusBarStyles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default statusBarStyles;
