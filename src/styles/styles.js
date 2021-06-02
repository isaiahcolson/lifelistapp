import {StyleSheet} from 'react-native';
import theme from './theme.style';

const styles = StyleSheet.create({
  // header options
  largeHeaderBold: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_13,
    fontWeight: theme.font_weight_bold,
  },
  mediumHeaderBold: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_6,
    fontWeight: theme.font_weight_bold,
  },
  mediumHeaderRegular: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_6,
    fontWeight: theme.font_weight_regular,
  },
  smallParagraphRegular: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_2,
    fontWeight: theme.font_weight_regular,
  },
  // general styles
  centeredComponent: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  standardScreen: {
    backgroundColor: theme.blue_jay_white,
    flex: theme.flex_one,
    justifyContent: 'center',
    padding: theme.spacing_5,
  },
});

export default styles;
