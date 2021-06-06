import {StyleSheet} from 'react-native';

import theme from './theme.style';

const AuthStyles = StyleSheet.create({
  pageTitle: {
    alignSelf: 'center',
    color: theme.blue_jay_black,
    fontSize: theme.font_size_5,
    fontWeight: theme.font_weight_bold,
    marginBottom: theme.spacing_6,
  },
  iconButton: {
    borderColor: theme.blue_jay_gray_2,
    borderRadius: theme.radius_4,
    borderStyle: 'solid',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.spacing_4,
    paddingVertical: theme.spacing_1,
  },
  iconButtonText: {
    alignSelf: 'center',
    fontWeight: theme.font_weight_bold,
  },
});

export default AuthStyles;
