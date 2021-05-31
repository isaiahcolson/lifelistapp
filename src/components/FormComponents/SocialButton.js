import React from 'react';
import {Text, Pressable} from 'react-native';

const SocialButton = ({buttonTitle, ...props}) => (
  <Pressable {...props}>
    <Text>{buttonTitle}</Text>
  </Pressable>
);

export default SocialButton;
