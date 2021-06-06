import {StyleSheet} from 'react-native';
import theme from './theme.style';

const FormStyles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formGroup: {
    marginBottom: theme.spacing_6,
  },
  formScreen: {
    justifyContent: 'space-between',
  },
  filledButton: {
    backgroundColor: theme.blue_jay_blue,
    borderRadius: theme.radius_4,
    textAlign: 'center',
    color: theme.blue_jay_white,
    fontWeight: theme.font_weight_bold,
    marginBottom: theme.spacing_2,
    paddingHorizontal: theme.spacing_3,
    paddingVertical: 14,
  },
  fullWidthInput: {
    backgroundColor: theme.blue_jay_white,
    borderColor: theme.blue_jay_gray_2,
    borderRadius: theme.radius_4,
    borderStyle: 'solid',
    borderWidth: 1,
    color: theme.blue_jay_black,
    marginBottom: theme.spacing_1,
    paddingHorizontal: theme.spacing_2,
    paddingVertical: theme.spacing_1,
  },
  ghostButton: {
    borderColor: theme.blue_jay_blue,
    borderRadius: theme.radius_4,
    borderStyle: 'solid',
    borderWidth: 2,
    textAlign: 'center',
    color: theme.blue_jay_blue,
    fontWeight: theme.font_weight_bold,
    marginBottom: theme.spacing_2,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  inlineButton: {
    color: theme.blue_jay_blue,
    fontWeight: theme.font_weight_bold,
  },
  inlineButtonFloat: {
    alignSelf: 'flex-end',
  },
  inlineButtonGroup: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  inlineIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    color: theme.blue_jay_black,
    fontSize: theme.font_size_1,
    fontWeight: theme.font_weight_bold,
    marginBottom: theme.spacing_half,
  },
});

export default FormStyles;
