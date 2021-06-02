import React from 'react';
import {TextInput} from 'react-native';
import theme from '../../styles/theme.style';

const FormInput = ({labelValue, placeholderText, ...props}) => (
  <TextInput
    numberOfLines={1}
    selectionColor={theme.blue_jay_black}
    value={labelValue}
    {...props}
  />
);

export default FormInput;
