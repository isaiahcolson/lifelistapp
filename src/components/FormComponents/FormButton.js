import React from 'react';
import {Pressable, Text} from 'react-native';

const FormButton = ({buttonStyle, buttonTitle, ...props}) => (
  <Pressable {...props}>
    <Text style={buttonStyle}>{buttonTitle}</Text>
  </Pressable>
);

export default FormButton;
