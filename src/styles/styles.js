import {StyleSheet} from 'react-native';
import theme from './theme.style';

const styles = StyleSheet.create({
  mediumHeaderBold: {
    color: theme.blue_jay_black,
    fontWeight: theme.font_weight_bold,
    fontSize: theme.font_size_7,
  },
  mediumHeaderNormal: {
    color: theme.blue_jay_black,
    fontWeight: theme.font_weight_normal,
    fontSize: theme.font_size_7,
    fontFamily: 'sans serif',
  },
});

export default styles;
