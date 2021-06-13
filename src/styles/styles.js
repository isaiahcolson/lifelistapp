import {StyleSheet} from 'react-native';
import theme from './theme.style';

const styles = StyleSheet.create({
  // header options
  largeHeaderBold: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_13,
    fontWeight: theme.font_weight_bold,
  },
  header2Bold: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_5,
    fontWeight: theme.font_weight_bold,
  },
  header2Regular: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_5,
    fontWeight: theme.font_weight_regular,
  },
  header3Bold: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_3,
    fontWeight: theme.font_weight_bold,
  },
  // general styles
  centeredComponent: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: theme.center,
    alignItems: theme.center,
  },
  centeredScreen: {
    backgroundColor: theme.blue_jay_white,
    flex: theme.flex_one,
    justifyContent: theme.center,
    padding: theme.spacing_5,
  },
  listItem: {
    borderBottomColor: theme.blue_jay_gray_1,
    borderBottomWidth: 1,
    paddingBottom: theme.spacing_2,
    marginBottom: theme.spacing_2,
  },
  standardScreen: {
    backgroundColor: theme.blue_jay_white,
    flex: theme.flex_one,
    padding: theme.spacing_5,
  },
});

export default styles;
