import React from 'react';
import {Pressable, Text} from 'react-native';

const FormButton = ({buttonTitle, ...props}) => (
  <Pressable {...props}>
    <Text>{buttonTitle}</Text>
  </Pressable>
);

export default FormButton;
