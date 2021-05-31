import React from 'react';
import {TextInput} from 'react-native';
import themeStyle from '../../styles/theme.style';

const FormInput = ({labelValue, placeholderText, ...props}) => (
  <TextInput
    numberOfLines={1}
    placeholder={placeholderText}
    placeholderTextColor={themeStyle.blue_jay_gray_2}
    style={{color: themeStyle.blue_jay_black}}
    value={labelValue}
    {...props}
  />
);

export default FormInput;
