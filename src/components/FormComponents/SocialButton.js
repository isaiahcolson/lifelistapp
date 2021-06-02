import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import AuthStyles from '../../styles/AuthStyles';

import theme from '../../styles/theme.style';

const SocialButton = ({buttonStyle, buttonTitle, ...props}) => (
  <Pressable {...props} style={buttonStyle}>
    <Image
      source={require('../../../assets/icons/icon-google.png')}
      resizeMode="contain"
      style={{
        width: theme.font_size_7,
        height: theme.font_size_7,
        marginRight: theme.spacing_2,
      }}
    />
    <Text style={AuthStyles.socialButtonText}>{buttonTitle}</Text>
  </Pressable>
);

export default SocialButton;
